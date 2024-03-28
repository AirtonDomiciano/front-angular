import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  public user: any
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  constructor(public auth: AuthService) {}

  onSubmit() {
    console.log(this.loginForm.value);
    const { email, password } = this.loginForm.value;
    if (email?.length && password?.length) {
      this.auth.emailSignin(email, password);
    }
  }
}
