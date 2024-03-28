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

  async onSubmit(): Promise<void> {
    console.log(this.loginForm.value);
    const { email, password } = this.loginForm.value;
    if (email?.length && password?.length) {
      const res: any = await this.auth.emailSignin(email, password);
      if (res._delegate?.accessToken.length > 0) {
        // this.navi
      }
    }
  }
}
