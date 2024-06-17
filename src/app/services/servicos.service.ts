import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { LocalService } from '../core/services/local.service';
import { Servicos } from '../shared/models/servicos.model';
@Injectable({
  providedIn: 'root',
})
export class ServicosService extends BaseService {
  constructor(
    public router: Router,
    public override http: HttpClient,
    public local: LocalService
  ) {
    super(http);
  }

  async buscarTodosServicos(): Promise<Array<Servicos>> {
    return new Promise((resolve) => {
      this.get('/atendimento').subscribe((res: any) => {
        if (res?.length) {
          resolve(res);
        }
      });
    });
  }

  async deletarServico(id: number): Promise<boolean> {
    return new Promise((resolve) => {
      this.delete(`/servicos/${id}`).subscribe((res: any) => {
        resolve(res);
      });
    });
  }

  async buscarServicoPorId(id: number): Promise<Servicos> {
    return new Promise((resolve) => {
      this.get(`/servicos/${id}`).subscribe((res: any) => {
        resolve(res);
      });
    });
  }

  async salvar(servico: Servicos): Promise<boolean> {
    return new Promise((resolve) => {
      this.post('/servicos', servico).subscribe((res: any) => {
        resolve(res);
      });
    });
  }
}
