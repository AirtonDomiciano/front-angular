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
  @Output() emitterCadastro: EventEmitter<boolean> =
    new EventEmitter<boolean>();

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
      const { email, password } = this.loginForm.value;

      if (!email?.length && !password?.length) {
        return;
      }

      this.LocalStorageService.saveLogin(email, password);

      const res: any = await this.auth.login(email, password);

      if (res) {
        this.wrongLogin = false;
        this.emitterLoggedIn.emit();
        this.router.navigate([`home/`]);
      }
    }
  }

  cadastro() {
    this.router.navigate([`cadastro`]);
    this.emitterCadastro.emit();
  }
}
