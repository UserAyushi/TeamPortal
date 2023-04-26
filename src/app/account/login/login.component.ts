import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  
  registerForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    rememberMe: new FormControl(true)
  });
private _logService: any;
private _loginService: any;
  constructor(private  loginService: LoginService, private router: Router) {

  }
  ngOnInit() {
    
   }

  login() {

    this.loginService.postLogin(this.registerForm.value).subscribe((res) => {
      console.log(res);
      alert("Use Logged-In!!!");
      localStorage.setItem("token", res['token']);
      this.router.navigate(["/domain/teamportal"]); 
    },
    (err) => {
      console.log(err);
      alert("please fill correct details !!");
    }
    )
    }
  get email() {
    return this.registerForm.get('email');
  }
  get password() {
    return this.registerForm.get('password');
  }
}
