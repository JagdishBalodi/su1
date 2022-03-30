import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ForgotPass } from '../Models/ForgotPass';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {

  forgotPass: FormGroup
  //user?: UserInfo[];

  constructor() {
    this.forgotPass = new FormGroup({
      password: new FormControl(
        '',
        Validators.required
      ),
      confirmPass: new FormControl(
        '',
        Validators.required
      ),
    }
    )

  }
  UpdatePassword() {
    const newPass: ForgotPass = <ForgotPass>this.forgotPass.value;
    console.log(newPass);
  }
}
