import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public wrongLogin: boolean = false;
  public loginForm!: FormGroup;

  constructor(
    public fb: FormBuilder,
    public loginService: LoginService,
    private router: Router,
    private LocalStorageService: LocalStorageService
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

      const res: any = await this.loginService.SignIn(email, password);

      if (res) {
        const user = this.LocalStorageService.getLogin();
        console.log(user);
        this.router.navigate(['home']);
      }
    }
  }

  cadastro() {
    this.router.navigate(['cadastro']);
  }
}
