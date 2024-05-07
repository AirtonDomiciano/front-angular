import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { RegistroUsuarioInterface } from './registro-usuario.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.scss'],
})
export class RegistroUsuarioComponent {
  public formGroup: UntypedFormGroup;
  public senhasSaoIguais: boolean = true;
  @Output() emitterLogin: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private fb: FormBuilder, private router: Router) {
    this.formGroup = this.fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      senha: ['', Validators.required],
      confirmarSenha: ['', Validators.required],
    });
  }

  onSubmit() {
    const dadosCadastro: any = this.formGroup.value;

    const verificao = this.validacaoSalvar(dadosCadastro);

    if (verificao) {
      this.router.navigate([`login`]);
      this.login();
    }
  }

  validacaoSalvar(dadosCadastro: RegistroUsuarioInterface): boolean {
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
    this.emitterLogin.emit();
    this.router.navigate([`login`]);
  }
}
