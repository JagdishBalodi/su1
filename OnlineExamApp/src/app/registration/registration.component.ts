import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserInfo } from '../Models/userInfo';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;
  //user?: UserInfo[];

  constructor(private us: UserService) {
    this.registrationForm = new FormGroup({
      userName: new FormControl(
        '',
        [
          Validators.required
        ]
      ),
      emailId: new FormControl('',
        [
          Validators.required,
          Validators.email
        ]
      ),
      city: new FormControl('',
        Validators.required
      ),
      mobileNo: new FormControl('',
        [Validators.required,
        Validators.maxLength(10),
        Validators.minLength(10)
        ]),
      state: new FormControl('',
        Validators.required),
      qualification: new FormControl('',
        Validators.required),
      dob: new FormControl('',
        Validators.required
      ),
      yearOfCom: new FormControl('',
        Validators.required)
    })
  }

  ngOnInit(): void {

  }

  submitUser() {
    const userData: UserInfo = <UserInfo>this.registrationForm.value;
    console.log(userData);
  }
}


