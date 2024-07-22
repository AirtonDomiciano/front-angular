import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApisService } from 'src/app/services/apis.service';
import { ApiModel } from './model/api.model';
import { ApisModel } from '../apis/model/apis.model';
import { Toast } from 'primeng/toast';
import { ToastMessageService } from 'src/app/shared/services/toast-message.service';
import { UtilsService } from 'src/app/shared/utils/utils.service';

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
    private apisService: ApisService,
    private toast: ToastMessageService,
    private utils: UtilsService
  ) {}

  async ngOnInit(): Promise<void> {
    this.formGroup = this.fb.group(this.model);
    this.validarCamposRequeridos();

    if (this.id > 0) {
      this.editarApi();
    }
  }

  async editarApi(): Promise<void> {
    this.model = await this.apisService.buscarApiPorId(this.id);
    delete this.model.idApis;

    this.formGroup.setValue(this.model);
  }

  validarCamposRequeridos() {
    this.utils.setarCamposRequeridos(
      ['nome', 'url', 'rapidApiHost'],
      this.formGroup
    );
  }

  async onSubmit() {
    if (this.formGroup.invalid) {
      this.toast.mostrarAviso(
        'É preciso preencher todos os campos para prosseguir.'
      );
      return;
    }
    const input: ApisModel = this.formGroup.value;

    if (this.id) {
      input.idApis = this.id;
    }

    const res = await this.apisService.salvar(input);

    if (res) {
      if (this.id) {
        this.toast.mostrarSucesso('Edição Concluída!');
      } else {
        this.toast.mostrarSucesso('API Adicionada!');
      }
      this.router.navigate([`private/apis`]);
    }
  }
}
