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
   get username() {
      return this.authCredentialsDto.get('username')
     }
   get password() {
      return this.authCredentialsDto.get('password') 
    }

  ngOnInit(): void {
    let isLoggedIn = this.authService.isLoggedIn();
    if (isLoggedIn) {
      this.router.navigate(['/product']);
    } 

    this.authCredentialsDto = this.fb.group({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required,Validators.minLength(6)])
    });
  }
  saveUser(){
    let data = this.authCredentialsDto.value;
    this.authService.login(data).subscribe(
      res=>{
         
         console.log(res);
        let token = res.token;
        localStorage.setItem("myToken",token);
        this.router.navigate(['/home']);
      },
      err=>{
        console.log(err);
      }
    )

  }
  }


