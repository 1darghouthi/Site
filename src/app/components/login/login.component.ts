import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class  LoginComponent implements OnInit {

  btnTitle : String = "Login";
  x:string = "Login Title";
  loginForm: FormGroup;
  user: any={};
  errorMsg:string;

  constructor(
    private userService: UserService,
    private  router:Router ) { }

  ngOnInit(): void {
  }
  login(){

    this.userService.login(this.user).subscribe(
      (response)=>{

        if (response.message =="2") {
          if (response.user.role == "client"){
            this.router.navigate(['']);

          } else {
            this.router.navigate(['admin']);

          }


        } else {
          this.errorMsg ='Please check Email/PWD';
        }

        // if (response.message) {
        //  if (response.user.role == 'client') {
        //   this.router.navigate(['']);

        //  } else {
        //   this.router.navigate(['admin']);
        //  }
        // } else{
        //   this.errorMsg="Please check Email/Pwd";

        // }

      }
    );

  }

}
