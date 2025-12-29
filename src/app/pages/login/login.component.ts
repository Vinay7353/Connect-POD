import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [
    IonicModule,
    CommonModule, 
    ReactiveFormsModule
  ]
})

export class LoginComponent  implements OnInit {
  error = '';
  passreset = false;
  version = '1.0.0';
  loginStyle = {};

  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {}

  onLogin() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    }
  }

  onResetPassword() {
    console.log('Reset password');
  }

}
