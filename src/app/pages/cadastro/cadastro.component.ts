import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { cadastroInterface } from './cadastro.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent {
  public cadastroForm: UntypedFormGroup;
  public temNome: boolean = true;
  public temSobrenome: boolean = true;
  public temEmail: boolean = true;
  public temSenha: boolean = true;
  public temRepetirSenha: boolean = true;
  public senhaSaoIguais: boolean = true;
  @Output() emitterEscolheuLogin: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  constructor(private fb: FormBuilder, private router: Router) {
    this.cadastroForm = this.fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      senha: ['', Validators.required],
      repetirSenha: ['', Validators.required],
    });
  }

  onSubmit() {
    const dadosCadastro: any = this.cadastroForm.value;

    const verificao = this.validacaoSalvar(dadosCadastro);

    if (verificao) {
      this.router.navigate([`login`]);
      this.escolheuLogin();
    }
  }

  validacaoSalvar(dadosCadastro: cadastroInterface): boolean {
    this.temNome = true;
    this.temSobrenome = true;
    this.temEmail = true;
    this.temSenha = true;
    this.temRepetirSenha = true;
    this.senhaSaoIguais = true;

    let verificao: boolean = true;

    if (dadosCadastro.nome.length === 0 || dadosCadastro.nome === null) {
      verificao = false;
      this.temNome = false;
    }

    if (
      dadosCadastro.sobrenome.length === 0 ||
      dadosCadastro.sobrenome === null
    ) {
      verificao = false;
      this.temSobrenome = false;
    }

    if (
      dadosCadastro.email.length === 0 ||
      dadosCadastro.email === null ||
      !dadosCadastro.email.includes('@')
    ) {
      verificao = false;
      this.temEmail = false;
    }

    if (dadosCadastro.senha.length === 0 || dadosCadastro.senha === null) {
      verificao = false;
      this.temSenha = false;
    }

    if (
      dadosCadastro.repetirSenha.length === 0 ||
      dadosCadastro.repetirSenha === null
    ) {
      verificao = false;
      this.temRepetirSenha = false;
    }

    if (dadosCadastro.senha !== dadosCadastro.repetirSenha) {
      verificao = false;
      this.senhaSaoIguais = false;
    }

    return verificao;
  }

  escolheuLogin() {
    this.emitterEscolheuLogin.emit();
  }
}
