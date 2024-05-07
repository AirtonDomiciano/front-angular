import { Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { UserModel } from './model/user.model';
import { Router } from '@angular/router';
import { EnderecoInterface } from 'src/app/shared/components/input-cep/endereco.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  public formGroup!: UntypedFormGroup;

  public model: UserModel = new UserModel();

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

    const input: UserModel = this.formGroup.value;

    input.email = input.email.toLocaleLowerCase();

    const res = () => true;

    if (res()) {
      this.router.navigate([`users`]);
    }
  }

  onLoadCep(event: EnderecoInterface) {
    this.formGroup.controls['localidade'].setValue(event.localidade);
    this.formGroup.controls['uf'].setValue(event.uf);
    this.formGroup.controls['logradouro'].setValue(event.logradouro);
    this.formGroup.controls['bairro'].setValue(event.bairro);
  }
}
