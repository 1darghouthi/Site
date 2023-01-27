import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm:FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private userService: UserService,
    private router: Router) { }

  ngOnInit()  {
    this.signupForm = this.formBuilder.group({
      firstName:['',[Validators.required, Validators.minLength(3)]],
      lastName:['', [Validators.required, Validators.minLength(5)]],
      email:['', [Validators.email, Validators.required]],
      pwd:['',[Validators.minLength(6), Validators.maxLength(12), Validators.required]],
      confirmPwd:['']
    })

  }

  signup(){
    console.log("Here user object", this.signupForm.value );
    this.userService.signup(this.signupForm.value).subscribe(
      (response) => {
        console.log("Here response after signup", response.message);
        this.router.navigate(['']);

      }
    )

  }

}
