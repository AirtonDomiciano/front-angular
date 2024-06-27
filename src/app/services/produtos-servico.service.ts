import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { LocalService } from '../core/services/local.service';
import { ProdutosServicoInterface } from '../shared/interface/produtos-atendimento.interface';

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

  async buscarTodosProdutosServico(): Promise<Array<ProdutosServicoInterface>> {
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

  async buscarProdutoServicoPorId(
    id: number
  ): Promise<ProdutosServicoInterface> {
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
    idServicosAnimal: number
  ): Promise<Array<ProdutosServicoInterface>> {
    return new Promise((resolve) => {
      this.get(
        `/produtos-servico/buscarProdutosPorIdServicosAnimal/${idServicosAnimal}`
      ).subscribe((res: any) => {
        if (res) {
          resolve(res);
        } else {
          console.error('Ero!');
        }
      });
    });
  }

  async salvar(produtoServico: ProdutosServicoInterface): Promise<boolean> {
    return new Promise((resolve) => {
      this.post('/produtos-atendimento', produtoServico).subscribe(
        (res: any) => {
          resolve(res);
        }
      );
    });
  }
}
