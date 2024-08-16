import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { LocalService } from '../core/services/local.service';
import ProdutosServico from '../shared/interface/produtos-servico.interface';

@Injectable({
  providedIn: 'root',
})
export class ProdutosServicoService extends BaseService {
  constructor(
    public router: Router,
    public override http: HttpClient,
    public local: LocalService
  ) {
    super(http);
  }

  async buscarTodosProdutosServico(): Promise<Array<ProdutosServico>> {
    return new Promise((resolve) => {
      this.get('/produtos-servico').subscribe((res: any) => {
        if (res) {
          resolve(res);
        }
      });
    });
  }

  async deletarProdutoServico(id: number): Promise<boolean> {
    return new Promise((resolve) => {
      this.delete(`/produtos-servico/${id}`).subscribe((res: any) => {
        resolve(res);
      });
    });
  }

  async deletarPorIdTipoServico(id: number): Promise<boolean> {
    return new Promise((resolve) => {
      this.delete(`/produtos-servico/deletarPorIdTipoServico/${id}`).subscribe(
        (res: any) => {
          resolve(res);
        }
      );
    });
  }

  async buscarProdutoServicoPorId(id: number): Promise<ProdutosServico> {
    return new Promise((resolve) => {
      this.get(`/produtos-servico/${id}`).subscribe((res: any) => {
        if (res) {
          resolve(res);
        } else {
          console.error('Ero!');
        }
      });
    });
  }

  async buscarProdutosPorIdServicosAnimal(
    id: number
  ): Promise<Array<ProdutosServico>> {
    return new Promise((resolve) => {
      this.get(
        `/produtos-servico/buscarProdutosPorIdTipoServico/${id}`
      ).subscribe((res: any) => {
        if (res) {
          resolve(res);
        } else {
          console.error('Ero!');
        }
      });
    });
  }

  async salvar(produtoServico: ProdutosServico): Promise<boolean> {
    return new Promise((resolve) => {
      this.post('/produtos-servico', produtoServico).subscribe((res: any) => {
        resolve(res);
      });
    });
  }

  async salvarLista(produtoServico: ProdutosServico[]): Promise<boolean> {
    return new Promise((resolve) => {
      this.post('/produtos-servico/salvarLista', produtoServico).subscribe(
        (res: any) => {
          resolve(res);
        }
      );
    });
  }
}
