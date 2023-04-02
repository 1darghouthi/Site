import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { log } from 'console';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm:FormGroup;
  path:string;
  msgError: string;
  imagePreview: any;

  constructor(
    private formBuilder:FormBuilder,
    private userService: UserService,
    private router: Router) { }

  ngOnInit()  {
    this.path = this.router.url;
    console.log("Here path", this.path);

    this.signupForm = this.formBuilder.group({
      firstName:['',[Validators.required, Validators.minLength(3)]],
      lastName:['', [Validators.required, Validators.minLength(5)]],
      email:['', [Validators.email, Validators.required]],
      pwd:['',[Validators.minLength(6), Validators.maxLength(12), Validators.required]],
      confirmPwd:['']
    })

  }

  signup(){
    if (this.path=="/register"){
      this.signupForm.value.role="client";
    } else{
      this.signupForm.value.role= "admin";
    }

    this.userService.signup(this.signupForm.value).subscribe(
      (response) => {
        console.log("Here response after signup", response.message);
        if (response.message == "Email Exist") {
          this.msgError = response.message;

        } else {
          this.router.navigate(['']);

        }



      }
    )

  }

  onImageSelected(event: Event) {
    console.log("Here event", event);

    const file = (event.target as HTMLInputElement).files[0];
    console.log("Here file", file);

    this.signupForm.patchValue({ img: file });
    this.signupForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
    this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
    }

}
