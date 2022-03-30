import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Login } from '../Models/Login';
import { PasswordValidator } from '../Validators/PasswordValidator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor() {
    this.loginForm = new FormGroup({
      emailId: new FormControl('',
        [Validators.required,
        Validators.email
        ]),
      password: new FormControl('',
        [Validators.required,
          PasswordValidator.Digit,
          PasswordValidator.Length,
          PasswordValidator.LowerCase,
          PasswordValidator.SpacialCharacter,
          PasswordValidator.UpperCase
        ]),
        typeId: new FormControl('')
    });
  }

  ngOnInit(): void {
  }
  submitData(){
    const userData: Login = <Login>this.loginForm.value;
    console.log(userData);
  }

}
