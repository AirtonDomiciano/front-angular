import { Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { UsuarioModel } from './model/usuario.model';
import { Router } from '@angular/router';
import { EnderecoInterface } from 'src/app/shared/components/input-cep/endereco.interface';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss'],
})
export class UsuarioComponent implements OnInit {
  public formGroup!: UntypedFormGroup;

  public model: UsuarioModel = new UsuarioModel();

  constructor(fb: FormBuilder, private router: Router) {
    this.formGroup = fb.group(this.model);
  }

  ngOnInit(): void {
    this.requiredForm();
  }

  requiredForm(): void {
    this.formGroup.controls['nome'].setValidators([Validators.required]);
    this.formGroup.controls['sobrenome'].setValidators([Validators.required]);
  }

  onSubmit() {
    if (this.formGroup.invalid) {
      return;
    }

    const input: UsuarioModel = this.formGroup.value;

    input.email = input.email.toLocaleLowerCase();

    const res = () => true;

    if (res()) {
      this.router.navigate([`usuarios`]);
    }
  }

  onLoadCep(event: EnderecoInterface) {
    this.formGroup.controls['localidade'].setValue(event.localidade);
    this.formGroup.controls['uf'].setValue(event.uf);
    this.formGroup.controls['logradouro'].setValue(event.logradouro);
    this.formGroup.controls['bairro'].setValue(event.bairro);
  }
}
