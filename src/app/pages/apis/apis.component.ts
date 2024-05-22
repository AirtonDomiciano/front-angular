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

  public formGroup: FormGroup = new FormGroup({});

  constructor(private router: Router, public apisService: ApisService) {}

<<<<<<< HEAD
  ngOnInit(): void {
    this.listagemApis = apisMock;
    console.log(this.listagemApis);
    this.inicializandoAtivos();
=======
  async ngOnInit(): Promise<void> {
    this.buscarTodasApis();
>>>>>>> 3b15f55 (subindo-listagem-apis)
  }

  async buscarTodasApis() {
    const apis = await this.apisService.buscarTodasApis();

    if (!apis) {
      alert('Deu erro');
      return;
    }

    this.listaApis = apis;
  }

<<<<<<< HEAD
  alterouAtivo(id: number) {
    const ativo = this.formGroup.get(id.toString())?.value;
    const index = this.listagemApis.findIndex((el) => el.idApi === id);
    this.listagemApis[index].ativo = ativo;
    apisMock[index].ativo = this.listagemApis[index].ativo;
    console.log(apisMock);
  }

  inicializandoAtivos(): void {
    const group: any = {};
    this.listagemApis.forEach((api) => {
      group[api.idApi!.toString()] = new FormControl(api.ativo === true);
    });
    this.formGroup = new FormGroup(group);
  }

  excluirApi(id: number) {
    const index = this.listagemApis.findIndex((el) => el.idApi === id);
    if (index !== -1) {
      apisMock.splice(index, 1);
    }
=======
  adicionarApi() {
    this.router.navigate([`/private/api`]);
  }

  excluirApi(id: number) {
    this.apisService.deletarApi(id);
    window.location.reload();
>>>>>>> 3b15f55 (subindo-listagem-apis)
  }

  editarApi(id: number) {
    this.router.navigate([`/private/api/${id}`]);
  }
}
