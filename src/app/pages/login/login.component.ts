import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/guards/auth.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  public wrongLogin: boolean = false;
  public isInvalid: boolean = false;

  constructor(
    public fb: FormBuilder,
    public loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  async onSubmit(): Promise<void> {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      if (!email?.length && !password?.length) {
        return;
      }

      const res = await this.loginService.SignIn(email, password);

      if (!res.status) {
        this.isInvalid = !res.status;
        throw new Error(res.message);
      }
    }
  }

  cadastro() {
    this.router.navigate(['cadastro']);
  }
}
