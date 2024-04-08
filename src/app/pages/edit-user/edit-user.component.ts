import { Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from '../user/user.model';
import { UsersMock } from '../users/users.mock';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent implements OnInit {
  public id = Number(this.route.snapshot.paramMap.get('id'));
  public userFormGroup: UntypedFormGroup;
  public model: UserModel;
  public index = UsersMock.findIndex((el) => el.id === this.id);
  public user = new UserModel();
  public cepHaveOnlyNumbers: boolean = true;
  public emailIsWrong: boolean = false;
  public ageIsWrong: boolean = false;
  public cepIsWrong: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.model = UsersMock[this.index];
    this.userFormGroup = this.fb.group(this.model);
    const cepFormated = this.formatterFullCep(UsersMock[this.index].cep);
    this.userFormGroup.controls['cep'].setValue(cepFormated);
  }

  ngOnInit(): void {
    this.user = UsersMock[this.index];
    this.userFormGroup.controls['nome'].setValidators(Validators.required);
    this.userFormGroup.controls['sobrenome'].setValidators(Validators.required);
    this.userFormGroup.controls['idade'].setValidators(Validators.required);
    this.userFormGroup.controls['email'].setValidators(Validators.required);
    this.userFormGroup.controls['cep'].setValidators(Validators.required);
    this.userFormGroup.controls['funcao'].setValidators(Validators.required);
  }

  onSubmit() {
    this.emailIsWrong = false;
    this.ageIsWrong = false;
    this.cepHaveOnlyNumbers = true;
    this.cepIsWrong = false;

    if (this.userFormGroup.valid) {
      const validation: boolean = this.validationSave(this.userFormGroup.value);
      if (validation) {
        let input: UserModel = this.userFormGroup.value;

        input.email = input.email.toLocaleLowerCase();

        UsersMock[this.index] = input;
        this.router.navigate([`users`]);
      }
    }
  }

  onLoadCep(event: Event) {
    const cep = this.userFormGroup.get('cep')?.value;
    const isValid: boolean = this.cepIsValid(cep);

    if (isValid) {
      const formatedCep: string = this.formatedCep(cep);
      this.userFormGroup.controls['cep'].setValue(formatedCep);
      if (
        cep.length === 6 &&
        event instanceof InputEvent &&
        event.inputType === 'deleteContentBackward'
      ) {
        let newCep = cep.slice(0, -1);
        this.userFormGroup.controls['cep'].setValue(newCep);
      }
    } else {
      let newCep = cep.slice(0, -1);
      this.userFormGroup.controls['cep'].setValue(newCep);
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
      this.emailIsWrong = true;
      validation = false;
    }
    return validation;
  }

  formatterFullCep(cep: string) {
    let myCep = cep.slice(0, 5);
    myCep += '-';
    myCep += cep.slice(5, 8);

    return myCep;
  }
}
