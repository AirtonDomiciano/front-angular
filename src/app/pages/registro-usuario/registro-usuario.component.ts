import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import RegistroUsuarioModel from './model/registro-usuario.model';
import { RegistroUsuarioService } from 'src/app/services/registro-usuarios.service';
import RegistroUsuario from './model/registro-usuario';
import { UtilsService } from 'src/app/shared/utils/utils.service';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.scss'],
})
export class RegistroUsuarioComponent implements OnInit {
  public formGroup!: FormGroup;
  public senhasSaoIguais: boolean = true;
  public ocultar: boolean = true;
  public model: RegistroUsuarioModel = new RegistroUsuarioModel();

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private registroUsuarioService: RegistroUsuarioService,
    private utils: UtilsService
  ) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group(this.model);
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

  validarCamposRequeridos() {
    this.utils.setarCamposRequeridos(
      ['nome', 'sobrenome', 'email', 'senha', 'confirmarSenha'],
      this.formGroup
    );
  }
}
