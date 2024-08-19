import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { LocalService } from '../core/services/local.service';
import Movimentacoes from '../shared/model/movimentacoes';

@Injectable({
  providedIn: 'root',
})
export class MovimentacoesService extends BaseService {
  constructor(
    public router: Router,
    public override http: HttpClient,
    public local: LocalService
  ) {
    super(http);
  }

  async buscarTodos(): Promise<Array<Movimentacoes>> {
    return new Promise((resolve) => {
      this.get('/movimentacoes').subscribe((res: any) => {
        if (res) {
          resolve(res);
        }
      });
    });
  }

  async deletar(id: number): Promise<boolean> {
    return new Promise((resolve) => {
      this.delete(`/movimentacoes/${id}`).subscribe((res: any) => {
        resolve(res);
      });
    });
  }

  async buscarPorId(id: number): Promise<Movimentacoes> {
    return new Promise((resolve) => {
      this.get(`/movimentacoes/${id}`).subscribe((res: any) => {
        if (res) {
          resolve(res);
        }
      });
    });
  }

  async salvar(movimentacoes: Movimentacoes): Promise<boolean> {
    return new Promise((resolve) => {
      this.post('/movimentacoes', movimentacoes).subscribe((res: any) => {
        resolve(res);
      });
    });
  }

  async salvarPagamento(
    id: number,
    movimentacoes: Movimentacoes
  ): Promise<boolean> {
    return new Promise((resolve) => {
      this.post(
        `/movimentacoes/salvarPagamento/${id}`,
        movimentacoes
      ).subscribe((res: any) => {
        resolve(res);
      });
    });
  }
}
