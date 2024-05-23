import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { LocalService } from '../core/services/local.service';
import ClientesInterface from '../pages/clientes/model/clientes.interface';

@Injectable({
  providedIn: 'root',
})
export class ClientesService extends BaseService {
  constructor(
    public router: Router,
    public override http: HttpClient,
    public local: LocalService
  ) {
    super(http);
  }

  async BuscarTodosClientes(): Promise<Array<ClientesInterface>> {
    return new Promise((resolve) => {
      this.get('/clientes').subscribe((res: any) => {
        if (res?.length) {
          resolve(res);
        }
      });
    });
  }

  async DeletarCliente(id: number): Promise<Array<ClientesInterface>> {
    return new Promise((resolve) => {
      this.delete('/clientes', id).subscribe((res: any) => {
        if (res?.length) {
          resolve(res);
        }
      });
    });
  }
}
