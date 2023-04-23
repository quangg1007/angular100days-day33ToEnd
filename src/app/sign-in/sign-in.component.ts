import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  usernamePattern = /^[a-z]{6,32}$/i;
  passwordPattern = /^(?=.*[!@#$%^&*]+)[a-z0-9!@#$%^&*]{6,32}$/;

  userInfo = {
    userName: '',
    password: '',
    rememberMe: false,
  };
  constructor() {}

  ngOnInit(): void {

  }

  onSubmit(form: NgForm): void {
    console.log(form);
  }
}
