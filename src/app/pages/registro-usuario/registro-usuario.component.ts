import { Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import RegistroUsuarioModel from './model/registro-usuario.model';
import { RegistroUsuarioService } from 'src/app/services/registro-usuarios.service';
import RegistroUsuario from './model/registro-usuario';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.scss'],
})
export class RegistroUsuarioComponent implements OnInit {
  public formGroup!: UntypedFormGroup;
  public senhasSaoIguais: boolean = true;
  public ocultar: boolean = true;
  public model: RegistroUsuarioModel = new RegistroUsuarioModel();
  constructor(
    private fb: FormBuilder,
    private router: Router,
    public registroUsuarioService: RegistroUsuarioService
  ) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group(this.model);

    this.formGroup.controls['nome'].setValidators([Validators.required]);
    this.formGroup.controls['sobrenome'].setValidators([Validators.required]);
    this.formGroup.controls['email'].setValidators([
      Validators.required,
      Validators.email,
    ]);
    this.formGroup.controls['senha'].setValidators([Validators.required]);
    this.formGroup.controls['confirmarSenha'].setValidators([
      Validators.required,
    ]);
  }

  async onSubmit() {
    const dadosCadastro: any = this.formGroup.value;

    const verificao = this.validacaoSalvar(dadosCadastro);

    if (verificao) {
      try {
        const { nome, sobrenome, email, senha } = this.formGroup.value;

        const res = await this.registroUsuarioService.RegistroUsuario(
          nome,
          sobrenome,
          email,
          senha
        );

        if (res.status) {
          this.login();
        } else {
          throw new Error(res.message);
        }
      } catch (error) {
        console.error('Erro durante o registro de usuário!', error);
      }
    }
  }

  validacaoSalvar(dadosCadastro: RegistroUsuario): boolean {
    let verificao: boolean = true;
    this.senhasSaoIguais = true;

    if (
      !dadosCadastro.email ||
      !dadosCadastro.nome ||
      !dadosCadastro.sobrenome ||
      !dadosCadastro.senha ||
      !dadosCadastro.confirmarSenha
    ) {
      verificao = false;
    }

    if (dadosCadastro.senha !== dadosCadastro.confirmarSenha) {
      verificao = false;
      this.senhasSaoIguais = false;
    }
    return verificao;
  }

  login() {
    this.router.navigate([`/auth/login`]);
  }

  mostrarSenha() {
    this.ocultar = !this.ocultar;
  }
}
