import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApisModel } from '../apis/api.model';
import { apisMock } from '../apis/apis.mock';

@Component({
  selector: 'app-edit-api',
  templateUrl: './edit-api.component.html',
  styleUrls: ['./edit-api.component.scss'],
})
export class EditApiComponent implements OnInit {
  public apiFormGroup: FormGroup;
  public id = Number(this.route.snapshot.paramMap.get('id'));
  public model: ApisModel;
  public api = new ApisModel();
  public index = apisMock.findIndex((el) => el.id === this.id);
  public nomeIsEmpty: boolean = false;
  public urlIsEmpty: boolean = false;
  public rapidApiHostIsEmpty: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.model = apisMock[this.index];
    this.apiFormGroup = this.fb.group(this.model);
  }

  ngOnInit(): void {
    this.api = apisMock[this.index];

    this.apiFormGroup.controls['nome'].setValidators([Validators.required]);
    this.apiFormGroup.controls['url'].setValidators([Validators.required]);
    this.apiFormGroup.controls['rapidApiHost'].setValidators([
      Validators.required,
    ]);
  }

  onSubmit() {
    this.nomeIsEmpty = false;
    this.urlIsEmpty = false;
    this.rapidApiHostIsEmpty = false;

    const validation = this.saveValidation(this.apiFormGroup.value);
    if (validation) {
      let input: ApisModel = this.apiFormGroup.value;

      apisMock[this.index] = input;
      this.router.navigate([`apis`]);
    }
  }

  saveValidation(input: ApisModel): boolean {
    let validation = true;

    if (input.nome.length === 0 || input.nome === null) {
      this.nomeIsEmpty = true;
      validation = false;
    }

    if (input.url.length === 0 || input.nome === null) {
      this.urlIsEmpty = true;
      validation = false;
    }

    if (input.rapidApiHost.length === 0 || input.rapidApiHost === null) {
      this.rapidApiHostIsEmpty = true;
      validation = false;
    }

    return validation;
  }
}
