import { Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { UserModel } from './user.model';
import { UsersMock } from '../users/users.mock';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
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

  ngOnInit(): void {}

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
      console.log(UsersMock);
      console.log(this.cadastroGroup);
    }
  }
}
