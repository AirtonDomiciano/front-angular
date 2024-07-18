import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { LocalService } from '../core/services/local.service';
import ProdutosDoServico from '../shared/model/produtos-do-servico';
@Injectable({
  providedIn: 'root',
})
export class ProdutosDoServicoService extends BaseService {
  constructor(
    public router: Router,
    public override http: HttpClient,
    public local: LocalService
  ) {
    super(http);
  }

  async BuscarTodos(): Promise<Array<ProdutosDoServico>> {
    return new Promise((resolve) => {
      this.get('/produtos-do-servico').subscribe((res: any) => {
        if (res) {
          resolve(res);
        }
      });
    });
  }

  async deletar(id: number): Promise<boolean> {
    return new Promise((resolve) => {
      this.delete(`/produtos-do-servico/${id}`).subscribe((res: any) => {
        resolve(res);
      });
    });
  }

  async deletarPorIdServicos(id: number): Promise<boolean> {
    return new Promise((resolve) => {
      this.delete(`/produtos-do-servico/deletarPeloIdServicos/${id}`).subscribe(
        (res: any) => {
          resolve(res);
        }
      );
    });
  }

  async BuscarPorId(id: number): Promise<ProdutosDoServico> {
    return new Promise((resolve) => {
      this.get(`/produtos-do-servico/${id}`).subscribe((res: any) => {
        if (res) {
          resolve(res);
        }
      });
    });
  }

  async BuscarPorIdServico(
    idServico: number
  ): Promise<Array<ProdutosDoServico>> {
    return new Promise((resolve) => {
      this.get(
        `/produtos-do-servico/buscarPorIdServico/${idServico}`
      ).subscribe((res: any) => {
        if (res) {
          resolve(res);
        }
      });
    });
  }

  async salvar(produto: ProdutosDoServico): Promise<boolean> {
    return new Promise((resolve) => {
      this.post('/produtos-do-servico', produto).subscribe((res: any) => {
        resolve(res);
      });
    });
  }
}
