import { Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import RegistroUsuarioModel from './model/registro-usuario.model';
import { RegistroUsuarioService } from 'src/app/services/registro-usuarios.service';
import { RegistroUsuarioInterfaceInput } from './model/registro-usuario.interface';

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
    this.formGroup.controls['email'].setValidators([Validators.required]);
    this.formGroup.controls['senha'].setValidators([Validators.required]);
  }

  async onSubmit() {
    const dadosCadastro: any = this.formGroup.value;

    const verificao = this.validacaoSalvar(dadosCadastro);

    if (this.formGroup.valid) {
      const { nome, sobrenome, email, senha } = this.formGroup.value;

      if (
        !email?.length &&
        !nome?.length &&
        !sobrenome?.length &&
        !senha?.length
      ) {
        return;
      }

      const res = await this.registroUsuarioService.RegistroUsuario(
        nome,
        sobrenome,
        email,
        senha
      );

      if (!res.status) {
        throw new Error(res.message);
      }
    }

    if (verificao) {
      this.login();
    }
  }

  validacaoSalvar(dadosCadastro: RegistroUsuarioInterfaceInput): boolean {
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
