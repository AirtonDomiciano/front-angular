import { Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { UserModel } from './user.model';
import { UsersMock } from '../users/users.mock';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  public cadastroGroup: UntypedFormGroup;

  constructor(fb: FormBuilder) {
    this.cadastroGroup = fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      idade: ['', Validators.required],
      email: ['', Validators.required],
      cep: ['', Validators.required],
      funcao: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.cadastroGroup.valid) {
      let usersLength = UsersMock.length - 1;

      let input: UserModel = this.cadastroGroup.value;

      if (UsersMock.length < 1) {
        input.id = 1;
      } else {
        let newId = UsersMock[usersLength].id! + 1;
        input.id = newId;
      }

      UsersMock.push(input);
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
}
