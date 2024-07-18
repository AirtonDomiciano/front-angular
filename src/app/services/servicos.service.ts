import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { LocalService } from '../core/services/local.service';
import EditarServico from '../shared/interface/editar-servico.interface';
import ServicosModel from '../pages/atendimentos/model/servicos.model';
import Servicos from '../shared/model/servicos';

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
      this.get('/servicos').subscribe((res: any) => {
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

  async listandoServicosClientesAnimais(): Promise<Array<ServicosModel>> {
    return new Promise((resolve) => {
      this.get('/servicos/listando').subscribe((res: any) => {
        if (res.length) {
          resolve(res);
        }
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

  async buscarPorIdAtendimento(id: number): Promise<Servicos> {
    return new Promise((resolve) => {
      this.get(`/servicos/buscarPorIdAtendimento/${id}`).subscribe(
        (res: any) => {
          resolve(res);
        }
      );
    });
  }

  async buscarCamposEditarServico(id: number): Promise<Array<EditarServico>> {
    return new Promise((resolve) => {
      this.get(`/servicos/camposEditar/${id}`).subscribe((res: any) => {
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
