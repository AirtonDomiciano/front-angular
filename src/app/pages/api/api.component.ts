import { Component } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { apisMock } from '../apis/apis.mock';
import { Router } from '@angular/router';
import { ApisModel } from '../apis/model/apis.model';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss'],
})
export class ApiComponent {
  public apiFormGroup: UntypedFormGroup;
  public semNome: boolean = false;
  public semUrl: boolean = false;
  public semRapidApiHost: boolean = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.apiFormGroup = fb.group({
      nome: ['', Validators.required],
      url: ['', Validators.required],
      rapidApiHost: ['', Validators.required],
    });
  }

  onSubmit() {
    let newApi = this.apiFormGroup.value;
    const verificacao = this.validacaoSave(newApi);

    if (verificacao) {
      let newId = apisMock[apisMock.length - 1].id! + 1;
      apisMock.push(newApi);
      apisMock[apisMock.length - 1].id = newId;
      this.router.navigate([`apis`]);
    }
  }

  validacaoSave(newApi: ApisModel) {
    let validacao = true;

    if (newApi.nome.length === 0 || newApi.nome === null) {
      this.semNome = true;
      validacao = false;
    }

    if (newApi.url.length === 0 || newApi.url === null) {
      this.semUrl = true;
      validacao = false;
    }

    if (newApi.rapidApiHost.length === 0 || newApi.rapidApiHost === null) {
      this.semRapidApiHost = true;
      validacao = false;
    }

    return validacao;
  }
}
