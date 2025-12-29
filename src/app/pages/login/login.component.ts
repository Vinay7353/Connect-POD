import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Auth } from '../../services/auth';
// import { NavController } from '@ionic/angular';


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

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: Auth) { }

  ngOnInit() {}

  onLogin() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.auth.login(this.loginForm.value.email!, this.loginForm.value.password!);
      this.router.navigate(['/home'], { queryParams: { from: 'login' } });
      // // simple navigate
      // this.router.navigate(['/home']);

      // // with query params
      // this.router.navigate(['/home'], { queryParams: { from: 'login' } });

      // // replace history so back button won't return to login
      // this.router.navigate(['/home'], { replaceUrl: true });

      // // send state
      // this.router.navigateByUrl('/home', { state: { user: 'vinay' } });





  //       // push with forward animation
  // this.navCtrl.navigateForward('/home');

  // // set as root (clears stack)
  // this.navCtrl.navigateRoot('/home');

  //   <!-- with query params -->
  // <ion-button [routerLink]="['/home']" [queryParams]="{ from: 'login' }">Go</ion-button>
    }
  }

  onResetPassword() {
    console.log('Reset password');
  }

}
