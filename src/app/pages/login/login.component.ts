import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public user: any;
  public wrongLogin: boolean = false;
  @Output() emitterLoggedIn: EventEmitter<boolean> =
    new EventEmitter<boolean>();
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  constructor(
    public auth: AuthService,
    private router: Router,
    private LocalStorageService: LocalStorageService
  ) {}

  async onSubmit(): Promise<void> {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      const { email, password } = this.loginForm.value;
      if (email?.length && password?.length) {
        try {
          this.LocalStorageService.saveLogin(email, password);
        } finally {
          setTimeout(() => {
            this.wrongLogin = true;
          }, 1000);
        }
        const res: any = await this.auth.emailSignin(email, password);
        if (res._delegate?.accessToken.length > 0) {
          this.wrongLogin = false;
          this.emitterLoggedIn.emit();
          this.router.navigate([`home/`]);
        }
      }
    }
  }
}
