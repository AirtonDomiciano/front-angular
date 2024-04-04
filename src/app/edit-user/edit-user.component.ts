import { Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from '../pages/user/user.model';
import { UsersMock } from '../pages/users/users.mock';

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

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.model = UsersMock[this.index];
    this.userFormGroup = this.fb.group(this.model);
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
    if (this.userFormGroup.valid) {
      let input = this.userFormGroup.value;
      UsersMock[this.index] = input;
      this.router.navigate([`users`]);
    }
  }
}
