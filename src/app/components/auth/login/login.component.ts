import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import {AuthService} from "../../../services/auth/auth.service";
import {AlertService} from "../../../services/alert/alert.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  authCredentialsDto: FormGroup;
  constructor(
    private fb : FormBuilder ,
    private authService: AuthService,
    private router : Router,
    private alertService: AlertService,
    ) {
    
   }
   get email() {
      return this.authCredentialsDto.get('email')
     }
   get password() {
      return this.authCredentialsDto.get('password') 
    }

  ngOnInit(): void {
    

    this.authCredentialsDto = this.fb.group({
      username: new FormControl(null, [Validators.required,Validators.email]),
      password: new FormControl(null, [Validators.required,Validators.minLength(6)])
    });
  }
  saveUser(){
    this.authService.login(this.authCredentialsDto.value).subscribe(
      res => {
        localStorage.setItem("token", res.accessToken);
        this.authService.prepareUserData();
        this.router.navigate([`/home`]);
      },
      error => {
        this.alertService.error(error)
       
      }
    );
  }


  }


