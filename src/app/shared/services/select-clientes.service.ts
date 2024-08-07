import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalService } from 'src/app/core/services/local.service';
import { BaseService } from 'src/app/services/base.service';
import Clientes from '../model/clientes';

@Injectable({
  providedIn: 'root',
})
export class SelectClientesService extends BaseService {
  constructor(
    public router: Router,
    public override http: HttpClient,
    public local: LocalService
  ) {
    super(http);
  }

  async BuscarTodosClientes(): Promise<Array<Clientes>> {
    return new Promise((resolve) => {
      this.get('/clientes').subscribe((res: any) => {
        if (res) {
          resolve(res);
        }
      });
    });
  }
}
