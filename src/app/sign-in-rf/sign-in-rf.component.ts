import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { noWhiteSpaceValidator } from '../shared/validators/no-white-space.validator';

@Component({
  selector: 'app-sign-in-rf',
  templateUrl: './sign-in-rf.component.html',
  styleUrls: ['./sign-in-rf.component.scss']
})
export class SignInRfComponent implements OnInit {
  // signInForm = new FormGroup({
  //   username: new FormControl(''), // <== default value
  //   password: new FormControl(''), // <== default value
  //   rememberMe: new FormControl(false), // <== default value
  // });

  signInForm = this.fb.group({
    username : [
      "",
      Validators.compose([
        Validators.required,
        Validators.minLength(6),
        noWhiteSpaceValidator(),
        Validators.pattern(/^[a-z]{6,32}$/i),
      ])
    ],
    password: [
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(/^(?=.*[!@#$%^&*]+)[a-z0-9!@#$%^&*]{6,32}$/),
      ]),
    ],
    rememberMe : false
  })

  control = this.fb.control('',Validators.minLength(6 ))
  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.signInForm.patchValue({
      username: 'MinhQuang'
    })
  }

  onSubmit(): void {
    console.log(this.signInForm);
  }
}
