import { Component, OnInit } from '@angular/core';
import { ApisModel } from './model/apis.model';
import { apisMock } from './apis.mock';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-apis',
  templateUrl: './apis.component.html',
  styleUrls: ['./apis.component.scss'],
})
export class ApisComponent implements OnInit {
  public listagemApis: ApisModel[] = [];
  public formGroup: FormGroup = new FormGroup({});

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.listagemApis = apisMock;
    this.inicializandoAtivos();
  }

  adicionarAPI() {
    this.router.navigate([`private/api`]);
  }

  alterouAtivo(id: number) {
    const ativo = this.formGroup.get(id.toString())?.value;
    const index = this.listagemApis.findIndex((el) => el.id === id);
    this.listagemApis[index].ativo = ativo;
    apisMock[index].ativo = this.listagemApis[index].ativo;
    console.log(apisMock);
  }

  inicializandoAtivos(): void {
    const group: any = {};
    this.listagemApis.forEach((api) => {
      group[api.id!.toString()] = new FormControl(api.ativo === true);
    });
    this.formGroup = new FormGroup(group);
  }

  excluirApi(id: number) {
    const index = this.listagemApis.findIndex((el) => el.id === id);
    if (index !== -1) {
      apisMock.splice(index, 1);
    }
  }

  editarApi(id: number) {
    this.router.navigate([`private/api/${id}`]);
  }
}
