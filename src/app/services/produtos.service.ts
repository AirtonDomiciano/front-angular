import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { LocalService } from '../core/services/local.service';
import { ProdutosModel } from '../pages/produtos/model/produtos.model';
import { ProdutosInterface } from '../pages/produtos/model/produtos.interface';
import { ResBuscarPorId } from '../pages/produtos/model/res-buscar-por-id.interface';

@Injectable({
  providedIn: 'root',
})
export class ProdutosService extends BaseService {
  constructor(
    public router: Router,
    public override http: HttpClient,
    public local: LocalService
  ) {
    super(http);
  }

  async BuscarTodosProdutos(): Promise<Array<ProdutosInterface>> {
    return new Promise((resolve) => {
      this.get('/produtos').subscribe((res: any) => {
        if (res?.length) {
          resolve(res);
        }
      });
    });
  }

  async DeletarProduto(id: number): Promise<Array<ProdutosModel>> {
    return new Promise((resolve) => {
      this.delete('/produtos', id).subscribe((res: any) => {
        if (res?.length) {
          resolve(res);
        }
      });
    });
  }

  async CriarProduto(
    produto: ProdutosInterface
  ): Promise<Array<ProdutosModel>> {
    return new Promise((resolve) => {
      this.post('/produtos', produto).subscribe((res: any) => {
        if (res?.length) {
          resolve(res);
        }
      });
    });
  }

  async BuscarProdutoPorId(id: number): Promise<ResBuscarPorId> {
    return new Promise((resolve) => {
      this.getById('/produtos', id).subscribe((res: any) => {
        if (res?.success) {
          resolve(res);
        }
      });
    });
  }

  async EditarProduto(
    id: number,
    produto: ProdutosInterface
  ): Promise<ProdutosInterface> {
    return new Promise((resolve) => {
      this.put('/produtos', id, produto).subscribe((res: any) => {
        if (res?.success) {
          resolve(res);
        }
      });
    });
  }
}
