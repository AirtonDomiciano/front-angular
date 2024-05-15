import { Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { UsuarioModel } from './model/usuario.model';
import { Router, ActivatedRoute } from '@angular/router';
import { EnderecoInterface } from 'src/app/shared/components/input-cep/endereco.interface';
import { UsuariosMock } from '../usuarios/usuarios.mock';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss'],
})
export class UsuarioComponent implements OnInit {
  public formGroup!: UntypedFormGroup;
  public id = Number(this.route.snapshot.paramMap.get('id'));

  public index = UsuariosMock.findIndex((el) => el.idUsuario === this.id);

  public model: UsuarioModel = new UsuarioModel();

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.formGroup = fb.group(this.model);
  }

  ngOnInit(): void {
    if (this.id) {
      this.model = UsuariosMock[this.index];
      this.formGroup = this.fb.group(this.model);
    }
    this.requiredForm();
  }

  requiredForm(): void {
    this.formGroup.controls['nome'].setValidators([Validators.required]);
    this.formGroup.controls['sobrenome'].setValidators([Validators.required]);
    this.formGroup.controls['email'].setValidators([Validators.required]);
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

    const input: UsuarioModel = this.formGroup.value;

    if (UsuariosMock.length < 1) {
      input.idUsuario = 1;
    } else {
      let newId = UsuariosMock[UsuariosMock.length - 1].idUsuario! + 1;
      input.idUsuario = newId;
    }

    input.email = input.email.toLocaleLowerCase();

    const res = () => true;

    if (this.id) {
      UsuariosMock[this.index] = input;
      this.router.navigate([`private/usuarios`]);
      return;
    }

    UsuariosMock.push(input);
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
