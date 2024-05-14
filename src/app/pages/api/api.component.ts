import { Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { apisMock } from '../apis/apis.mock';
import { ActivatedRoute, Router } from '@angular/router';
import { ApisModel } from '../apis/model/apis.model';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss'],
})
export class ApiComponent implements OnInit {
  public formGroup: UntypedFormGroup;
  public id = Number(this.route.snapshot.paramMap.get('id'));
  public semNome: boolean = false;
  public semUrl: boolean = false;
  public semRapidApiHost: boolean = false;

  public index = apisMock.findIndex((el) => el.id === this.id);

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.formGroup = fb.group({
      nome: ['', Validators.required],
      url: ['', Validators.required],
      rapidApiHost: ['', Validators.required],
    });
  }

  ngOnInit() {
    if (this.id) {
      const api: ApisModel = apisMock[this.index];

      this.formGroup = this.fb.group(api);
    }
  }

  onSubmit() {
    if (this.id) {
      let input: ApisModel = this.formGroup.value;
      apisMock[this.index] = input;
      this.router.navigate([`private/apis`]);
      return;
    }
    let newApi = this.formGroup.value;
    const verificacao = this.validacaoSave(newApi);

    if (verificacao) {
      let newId = apisMock[apisMock.length - 1].id! + 1;
      apisMock.push(newApi);
      apisMock[apisMock.length - 1].id = newId;
      this.router.navigate([`private/apis`]);
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
