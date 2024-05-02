import { Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { UserModel } from './user.model';
import { UsersMock } from '../users/users.mock';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  public cadastroGroup: UntypedFormGroup;
  public cepHaveOnlyNumbers: boolean = true;
  public ageIsWrong: boolean = false;
  public cepIsWrong: boolean = false;

  constructor(fb: FormBuilder, private router: Router) {
    this.cadastroGroup = fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      idade: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cep: ['', Validators.required],
      funcao: ['', Validators.required],
    });
  }

  onSubmit() {
    this.ageIsWrong = false;
    this.cepHaveOnlyNumbers = true;
    this.cepIsWrong = false;

    const validation: boolean = this.validationSave(this.cadastroGroup.value);
    if (validation) {
      let usersLength = UsersMock.length - 1;

      let input: UserModel = this.cadastroGroup.value;

      if (UsersMock.length < 1) {
        input.id = 1;
      } else {
        let newId = UsersMock[usersLength].id! + 1;
        input.id = newId;
      }

      input.email = input.email.toLocaleLowerCase();
      input.ativo = true;
      UsersMock.push(input);
      this.router.navigate([`users`]);
    }
  }

  onLoadCep(event: Event) {
    const cep = this.cadastroGroup.get('cep')?.value;
    const isValid: boolean = this.cepIsValid(cep);

    if (isValid) {
      const formatedCep: string = this.formatedCep(cep);
      this.cadastroGroup.controls['cep'].setValue(formatedCep);
      if (
        cep.length === 6 &&
        event instanceof InputEvent &&
        event.inputType === 'deleteContentBackward'
      ) {
        let newCep = cep.slice(0, -1);
        this.cadastroGroup.controls['cep'].setValue(newCep);
      }
    } else {
      let newCep = cep.slice(0, -1);
      this.cadastroGroup.controls['cep'].setValue(newCep);
    }
  }

  cepIsValid(cep: string): boolean {
    if (cep.length <= 9) {
      return true;
    } else {
      return false;
    }
  }

  formatedCep(cep: string): string {
    if (cep.length === 5) {
      cep += '-';
    }
    return cep;
  }

  validationSave(input: UserModel): boolean {
    let validation = true;

    input.cep = input.cep.replace('-', '');

    if (input.nome === '') {
      validation = false;
    }

    if (input.sobrenome === '') {
      validation = false;
    }

    if (!input.idade) {
      validation = false;
    }

    if (input.email === '') {
      validation = false;
    }

    if (input.cep === '') {
      validation = false;
    }

    if (input.funcao === '') {
      validation = false;
    }

    if (input.idade < 0) {
      this.ageIsWrong = true;
      validation = false;
    }

    if (isNaN(Number(input.cep))) {
      this.cepHaveOnlyNumbers = false;
      validation = false;
    }

    if (input.cep.length !== 8) {
      this.cepIsWrong = true;
      validation = false;
    }

    if (!input.email.includes('@')) {
      validation = false;
    }

    if (input.idade < 0) {
      this.ageIsWrong = true;
    }
    return validation;
  }
}
