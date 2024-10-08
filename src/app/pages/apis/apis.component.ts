import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { ApisService } from 'src/app/services/apis.service';
import { ApisModel } from './model/apis.model';

@Component({
  selector: 'app-apis',
  templateUrl: './apis.component.html',
  styleUrls: ['./apis.component.scss'],
})
export class ApisComponent implements OnInit {
  public listaApis: ApisModel[] = [];
  public ativos: boolean = true;

  public formGroup: FormGroup = new FormGroup({});

  constructor(private router: Router, private apisService: ApisService) {}

  async ngOnInit(): Promise<void> {
    await this.buscarTodasApis(this.ativos);
  }

  async buscarTodasApis(ativo: boolean) {
    const apis = await this.apisService.buscarAtivosInativos(ativo);

    if (!apis) {
      alert('Deu erro');
      return;
    }

    this.listaApis = apis;
  }

  adicionarApi() {
    this.router.navigate([`/private/api`]);
  }

  async excluirApi(id: number) {
    const res = await this.apisService.deletarApi(id);

    if (res) {
      await this.buscarTodasApis(this.ativos);
    }
  }

  editarApi(id: number) {
    this.router.navigate([`/private/api/${id}`]);
  }
}
