import { Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApisModel } from '../apis/model/apis.model';
import { ApisService } from 'src/app/services/apis.service';

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
  public listaApis: ApisModel[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    public apisService: ApisService
  ) {
    this.formGroup = fb.group({
      nome: ['', Validators.required],
      url: ['', Validators.required],
      rapidApiHost: ['', Validators.required],
    });
  }

  async ngOnInit() {
    if (this.id) {
      const apis = await this.apisService.buscarTodasApis();
      this.listaApis = apis;
      const index = this.listaApis.findIndex((el) => el.idApis === this.id);

      const api: ApisModel = this.listaApis[index];
      this.formGroup = this.fb.group(api);
    }
  }

  onSubmit() {
    if (this.id) {
      let input: ApisModel = this.formGroup.value;
      this.apisService.editarApi(this.id, input);
      window.location.reload();
      return;
    }
    let newApi = this.formGroup.value;
    const verificacao = this.validacaoSave(newApi);

    if (verificacao) {
      this.apisService.criarApi(newApi);
      window.location.reload();
    }
  }

  validacaoSave(newApi: ApisModel) {
    let validacao = true;

    if (!newApi.nome) {
      this.semNome = true;
      validacao = false;
    }

    if (!newApi.url) {
      this.semUrl = true;
      validacao = false;
    }

    if (!newApi.rapidApiHost) {
      this.semRapidApiHost = true;
      validacao = false;
    }

    return validacao;
  }
}
