import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @Output() emitterLoggedIn: EventEmitter<boolean> =
    new EventEmitter<boolean>();
  @Output() emitterEscolheuCadastro: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  public user: any;
  public wrongLogin: boolean = false;
  public loginForm!: FormGroup;

  constructor(
    public fb: FormBuilder,
    public auth: AuthService,
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

  escolheuCadastro() {
    this.router.navigate([`cadastro`]);
    this.emitterEscolheuCadastro.emit();
  }
}
