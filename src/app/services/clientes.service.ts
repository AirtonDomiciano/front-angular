import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { LocalService } from '../core/services/local.service';
import ClientesModel from '../shared/model/clientes';
import Clientes from '../shared/model/clientes';

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

  async buscarTodosClientes(): Promise<Array<Clientes>> {
    return new Promise((resolve) => {
      this.get('/clientes').subscribe((res: any) => {
        if (res) {
          resolve(res);
        }
      });
    });
  }

  async buscarAtivosInativos(ativo: boolean): Promise<Array<Clientes>> {
    return new Promise((resolve) => {
      this.get(`/clientes/buscarAtivosInativos/${ativo}`).subscribe(
        (res: any) => {
          if (res) {
            resolve(res);
          }
        }
      );
    });
  }

  async deletarCliente(id: number): Promise<boolean> {
    return new Promise((resolve) => {
      this.delete(`/clientes/${id}`).subscribe((res: any) => {
        resolve(res);
      });
    });
  }

  async buscarClientePorId(id: number): Promise<Clientes> {
    return new Promise((resolve) => {
      this.get(`/clientes/${id}`).subscribe((res: any) => {
        if (res) {
          resolve(res);
        } else {
          console.error('Cliente não encontrado!');
        }
      });
    });
  }

  async salvar(cliente: ClientesModel): Promise<boolean> {
    return new Promise((resolve) => {
      this.post('/clientes', cliente).subscribe((res: any) => {
        resolve(res);
      });
    });
  }
}
