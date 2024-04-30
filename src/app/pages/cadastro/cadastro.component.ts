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
  public senhaSaoIguais: boolean = true;
  @Output() emitterEscolheuLogin: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  constructor(private fb: FormBuilder, private router: Router) {
    this.cadastroForm = this.fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      senha: ['', Validators.required],
      confirmarSenha: ['', Validators.required],
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
    this.senhaSaoIguais = true;

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
      this.senhaSaoIguais = false;
    }

    return verificao;
  }

  escolheuLogin() {
    this.emitterEscolheuLogin.emit();
  }
}
