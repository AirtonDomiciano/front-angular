import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { RegistroUsuarioInterfaceInput } from './registro-usuario.interface';
import { Router } from '@angular/router';
import RegistroUsuarioModel from './model/registro-usuario.model';

@Component({
  selector: 'app-cadastro',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.scss'],
})
export class RegistroUsuarioComponent {
  public formGroup: UntypedFormGroup;
  public senhasSaoIguais: boolean = true;
  public ocultar: boolean = true;

  constructor(private fb: FormBuilder, private router: Router) {
    this.formGroup = this.fb.group(new RegistroUsuarioModel());
  }

  onSubmit() {
    const dadosCadastro: any = this.formGroup.value;

    const verificao = this.validacaoSalvar(dadosCadastro);

    if (verificao) {
      this.login();
    }
  }

  validacaoSalvar(dadosCadastro: RegistroUsuarioInterfaceInput): boolean {
    this.senhasSaoIguais = true;

    let verificao: boolean = true;

    if (dadosCadastro.nome.length === 0 || dadosCadastro.nome === null) {
      verificao = false;
    } else if (
      dadosCadastro.sobrenome.length === 0 ||
      dadosCadastro.sobrenome === null
    ) {
      verificao = false;
    } else if (
      dadosCadastro.email.length === 0 ||
      dadosCadastro.email === null ||
      !dadosCadastro.email.includes('@')
    ) {
      verificao = false;
    } else if (
      dadosCadastro.senha.length === 0 ||
      dadosCadastro.senha === null
    ) {
      verificao = false;
    } else if (
      dadosCadastro.confirmarSenha.length === 0 ||
      dadosCadastro.confirmarSenha === null
    ) {
      verificao = false;
    } else if (dadosCadastro.senha !== dadosCadastro.confirmarSenha) {
      verificao = false;
      this.senhasSaoIguais = false;
    }

    return verificao;
  }

  login() {
    this.router.navigate([`auth/login`]);
  }

  mostrarSenha() {
    this.ocultar = !this.ocultar;
  }
}
