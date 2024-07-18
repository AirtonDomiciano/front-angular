import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EnderecoInterface } from 'src/app/shared/components/input-cep/endereco.interface';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { UsuarioModel } from './model/usuario.model';
import Usuario from 'src/app/shared/model/usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss'],
})
export class UsuarioComponent implements OnInit {
  public formGroup!: FormGroup;
  public id = Number(this.route.snapshot.paramMap.get('id'));
  public titulo: string = 'Cadastrar';

  public model: UsuarioModel = new UsuarioModel();
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private usuariosService: UsuariosService
  ) {}

  async ngOnInit(): Promise<void> {
    this.formGroup = this.fb.group(this.model);
    this.requiredForm();

    if (this.id > 0) {
      this.titulo = 'Editar';
      this.editarUsuario();
    }
  }

  async editarUsuario(): Promise<void> {
    this.model = await this.usuariosService.buscarUsuarioPorId(this.id);

    delete this.model.idUsuarios;

    this.formGroup.setValue(this.model);
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

  async onSubmit(): Promise<void> {
    if (this.formGroup.invalid) {
      return;
    }

    const input: Usuario = this.formGroup.value;
    input.email = input.email.toLocaleLowerCase();

    if (this.id) {
      input.idUsuarios = this.id;
    }

    const res = await this.usuariosService.salvar(input);

    if (res) {
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
