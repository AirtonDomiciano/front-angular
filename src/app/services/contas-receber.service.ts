import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { LocalService } from '../core/services/local.service';
import ContasReceberInterface from '../shared/interface/contas-receber.interface';
import SalvarComplementoInterface from '../shared/interface/salvar-pagamento.interface';

@Injectable({
  providedIn: 'root',
})
export class ContasReceberService extends BaseService {
  constructor(
    public router: Router,
    public override http: HttpClient,
    public local: LocalService
  ) {
    super(http);
  }

  async buscarTodas(): Promise<Array<ContasReceberInterface>> {
    return new Promise((resolve) => {
      this.get('/contas-receber').subscribe((res: any) => {
        if (res) {
          resolve(res);
        }
      });
    });
  }

  async deletar(id: number): Promise<boolean> {
    return new Promise((resolve) => {
      this.delete(`/contas-receber/${id}`).subscribe((res: any) => {
        resolve(res);
      });
    });
  }

  async deletarPorIdAtendimento(id: number): Promise<boolean> {
    return new Promise((resolve) => {
      this.delete(`/contas-receber/deletarPorIdAtendimento/${id}`).subscribe(
        (res: any) => {
          resolve(res);
        }
      );
    });
  }

  async buscarPorId(id: number): Promise<ContasReceberInterface> {
    return new Promise((resolve) => {
      this.get(`/contas-receber/${id}`).subscribe((res: any) => {
        if (res) {
          resolve(res);
        }
      });
    });
  }

  async buscarPorIdAtendimento(id: number): Promise<ContasReceberInterface> {
    return new Promise((resolve) => {
      this.get(`/contas-receber/buscarPorIdAtendimento/${id}`).subscribe(
        (res: any) => {
          if (res) {
            resolve(res);
          }
        }
      );
    });
  }

  async salvar(cliente: ContasReceberInterface): Promise<boolean> {
    return new Promise((resolve) => {
      this.post('/contas-receber', cliente).subscribe((res: any) => {
        resolve(res);
      });
    });
  }

  async salvarPagamento(
    id: number,
    obj: SalvarComplementoInterface
  ): Promise<boolean> {
    return new Promise((resolve) => {
      this.post(`/contas-receber/salvarPagamento/${id}`, obj).subscribe(
        (res: any) => {
          resolve(res);
        }
      );
    });
  }
}
