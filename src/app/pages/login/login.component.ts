import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { ToastMessageService } from 'src/app/shared/services/toast-message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  public wrongLogin: boolean = false;
  public oculto: boolean = true;

  constructor(
    public fb: FormBuilder,
    public loginService: LoginService,
    private router: Router,
    public toast: ToastMessageService
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

      const res = await this.loginService.SignIn(email, password);

      if (!res.status) {
        this.toast.mostrarErro('Email ou senha inválidos.');
      } else {
        this.toast.mostrarSucesso('Successo!');
      }
    } else {
      this.toast.mostrarAviso(
        'É preciso preencher todos os campos para prosseguir.'
      );
    }
  }

  cadastro() {
    this.router.navigate(['cadastro']);
  }

  mostrarSenha() {
    this.oculto = !this.oculto;
  }
}
