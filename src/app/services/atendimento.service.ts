import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { LocalService } from '../core/services/local.service';
import Atendimento from '../shared/model/atendimento';
import ServicosInterface from '../shared/interface/servicos.interface';

@Injectable({
  providedIn: 'root',
})
export class AtendimentoService extends BaseService {
  constructor(
    public router: Router,
    public override http: HttpClient,
    public local: LocalService
  ) {
    super(http);
  }

  async buscarTodosAtendimentos(): Promise<Array<Atendimento>> {
    return new Promise((resolve) => {
      this.get('/atendimento').subscribe((res: any) => {
        if (res) {
          resolve(res);
        }
      });
    });
  }

  async deletarAtendimento(id: number): Promise<boolean> {
    return new Promise((resolve) => {
      this.delete(`/atendimento/${id}`).subscribe((res: any) => {
        resolve(res);
      });
    });
  }

  async buscarAtendimentoPorId(id: number): Promise<Atendimento> {
    return new Promise((resolve) => {
      this.get(`/atendimento/${id}`).subscribe((res: any) => {
        resolve(res);
      });
    });
  }

  async salvar(atendimento: Atendimento): Promise<boolean> {
    return new Promise((resolve) => {
      this.post('/atendimento', atendimento).subscribe((res: any) => {
        resolve(res);
      });
    });
  }

  async iniciar(id: number): Promise<boolean> {
    return new Promise((resolve) => {
      this.post(`/atendimento/iniciar/${id}`).subscribe((res: any) => {
        resolve(res);
      });
    });
  }

  async finalizar(id: number): Promise<boolean> {
    return new Promise((resolve) => {
      this.post(`/atendimento/finalizar/${id}`).subscribe((res: any) => {
        resolve(res);
      });
    });
  }

  async cancelar(id: number): Promise<boolean> {
    return new Promise((resolve) => {
      this.post(`/atendimento/cancelar/${id}`).subscribe((res: any) => {
        resolve(res);
      });
    });
  }

  async restaurar(id: number): Promise<boolean> {
    return new Promise((resolve) => {
      this.post(`/atendimento/restaurar/${id}`).subscribe((res: any) => {
        resolve(res);
      });
    });
  }
}
