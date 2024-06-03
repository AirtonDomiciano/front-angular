import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApisService } from 'src/app/services/apis.service';
import { ApiModel } from './model/api.model';
import { ApisModel } from '../apis/model/apis.model';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss'],
})
export class ApiComponent implements OnInit {
  public formGroup!: FormGroup;
  public id = Number(this.route.snapshot.paramMap.get('id'));

  public model: ApiModel = new ApiModel();
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private apisService: ApisService
  ) {}

  async ngOnInit(): Promise<void> {
    this.formGroup = this.fb.group(this.model);
    this.requiredForm();

    if (this.id > 0) {
      this.editarApi();
    }
  }

  async editarApi(): Promise<void> {
    this.model = await this.apisService.buscarApiPorId(this.id);
    delete this.model.idApis;

    this.formGroup.setValue(this.model);
  }

  requiredForm() {
    this.formGroup.controls['nome'].setValidators([Validators.required]);
    this.formGroup.controls['url'].setValidators([Validators.required]);
    this.formGroup.controls['rapidApiHost'].setValidators([
      Validators.required,
    ]);
  }

  async onSubmit() {
    if (this.formGroup.invalid) {
      return;
    }
    const input: ApisModel = this.formGroup.value;

    if (this.id) {
      input.idApis = this.id;
    }

    const res = await this.apisService.salvar(input);

    if (res) {
      this.router.navigate([`private/apis`]);
    }
  }
}
