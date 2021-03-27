import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {User} from './../../../models/user' ; 

import {AuthService} from "../../../services/auth/auth.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup

  constructor(private fb: FormBuilder, private authservice : AuthService , private router : Router ) { }


  get firstname() { return this.registerForm.get('firstname') }
  get lastname() { return this.registerForm.get('lastname') }
  get phone() { return this.registerForm.get('phone') }
  get email() { return this.registerForm.get('email') }
  get password() { return this.registerForm.get('password') }
  get age() { return this.registerForm.get('age') }
  get country() { return this.registerForm.get('country') }
  get city() { return this.registerForm.get('city') }
  get address() { return this.registerForm.get('address') }
  get gender() { return this.registerForm.get('gender') }
  get username() { return this.registerForm.get('username') }

  ngOnInit(): void {
    let formControls = {
      firstname: new FormControl('', [
        Validators.required,
        Validators.pattern("[A-Za-z .'-]+"),
        Validators.minLength(2)
      ]),
      lastname: new FormControl('', [
        Validators.required,
        Validators.pattern("[A-Za-z .'-]+"),
        Validators.minLength(2)
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern("[0-9]+"),
        Validators.minLength(8),
        Validators.maxLength(13)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),

      age: new FormControl('', [
        Validators.required,
      ]),
      country: new FormControl('', [
        Validators.required,

      ]),
      city: new FormControl('', [
        Validators.required,

      ]),
      address: new FormControl('', [
        Validators.required,

      ]),
      gender: new FormControl('', [
        Validators.required,

      ]),
      username: new FormControl('', [
        Validators.required,
        Validators.pattern("[A-Za-z .'-]+"),
        Validators.minLength(2)
      ]),
    }
    this.registerForm = this.fb.group(formControls)
  }

  register() {
    let data = this.registerForm.value;
    this.authservice.registerUser(data).subscribe(
      res=>{
          this.router.navigate([`/home`]);
         console.log ("success") ;
      },
      err=>{
        console.log(err);
      }
    )
    
  }

  


}
