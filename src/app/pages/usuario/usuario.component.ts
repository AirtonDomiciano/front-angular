import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EnderecoInterface } from 'src/app/shared/components/input-cep/endereco.interface';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { UsuariosInterface } from '../usuarios/model/usuarios.interface';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss'],
})
export class UsuarioComponent implements OnInit {
  public formGroup: FormGroup;
  public id = Number(this.route.snapshot.paramMap.get('id'));

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private usuariosService: UsuariosService
  ) {
    this.formGroup = fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      email: ['', Validators.required],
      senha: ['', Validators.required],
      cep: ['', Validators.required],
      funcao: ['', Validators.required],
      idade: ['', Validators.required],
      localidade: ['', Validators.required],
      uf: ['', Validators.required],
      bairro: ['', Validators.required],
      logradouro: ['', Validators.required],
    });
  }

  async ngOnInit(): Promise<void> {
    if (this.id) {
      this.requiredForm();
      const usuario = await this.usuariosService.buscarUsuarioPorId(this.id);

      this.formGroup.controls['nome'].setValue(usuario.nome);
      this.formGroup.controls['sobrenome'].setValue(usuario.sobrenome);
      this.formGroup.controls['email'].setValue(usuario.email);
      this.formGroup.controls['senha'].setValue(usuario.senha);
      this.formGroup.controls['cep'].setValue(usuario.cep);
      this.formGroup.controls['funcao'].setValue(usuario.funcao);
      this.formGroup.controls['idade'].setValue(usuario.idade);
      this.formGroup.controls['localidade'].setValue(usuario.localidade);
      this.formGroup.controls['uf'].setValue(usuario.uf);
      this.formGroup.controls['bairro'].setValue(usuario.bairro);
      this.formGroup.controls['logradouro'].setValue(usuario.logradouro);
    }
  }

  requiredForm(): void {
    this.formGroup.controls['nome'].setValidators([Validators.required]);
    this.formGroup.controls['sobrenome'].setValidators([Validators.required]);
    this.formGroup.controls['email'].setValidators([Validators.required]);
    this.formGroup.controls['senha'].setValidators([Validators.required]);
    this.formGroup.controls['cep'].setValidators([Validators.required]);
    this.formGroup.controls['funcao'].setValidators([Validators.required]);
    this.formGroup.controls['idade'].setValidators([Validators.required]);
    this.formGroup.controls['localidade'].setValidators([Validators.required]);
    this.formGroup.controls['uf'].setValidators([Validators.required]);
    this.formGroup.controls['bairro'].setValidators([Validators.required]);
    this.formGroup.controls['logradouro'].setValidators([Validators.required]);
  }

  onSubmit() {
    if (this.formGroup.invalid) {
      return;
    }

    const input: UsuariosInterface = this.formGroup.value;

    input.email = input.email.toLocaleLowerCase();
    input.ativo = true;
    input.removido = false;
    input.cep = input.cep.replace('-', '');

    const res = () => true;

    if (this.id) {
      input.ativo = true;
      input.removido = false;

      this.usuariosService.editarUsuario(this.id, input);

      this.router.navigate([`private/usuarios`]);
      return;
    }

    this.usuariosService.criarUsuario(input);

    if (res()) {
      this.router.navigate([`private/usuarios`]);
    }
  }

  onLoadCep(event: EnderecoInterface) {
    this.formGroup.controls['localidade'].setValue(event.localidade);
    this.formGroup.controls['uf'].setValue(event.uf);
    this.formGroup.controls['logradouro'].setValue(event.logradouro);
    this.formGroup.controls['bairro'].setValue(event.bairro);
  }
}
