import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService } from '../services/base.service';
import { HttpClient } from '@angular/common/http';
import { LocalService } from '../core/services/local.service';
import { ProdutosInterface } from '../shared/models/produtos.interface';
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
        if (res) {
          resolve(res);
        }
      });
    });
  }

  async DeletarProduto(id: number): Promise<boolean> {
    return new Promise((resolve) => {
      this.delete(`/produtos/${id}`).subscribe((res: any) => {
        resolve(res);
      });
    });
  }

  async CriarProduto(produto: ProdutosInterface): Promise<boolean> {
    return new Promise((resolve) => {
      this.post('/produtos', produto).subscribe((res: any) => {
        resolve(res);
      });
    });
  }

  async BuscarProdutoPorId(id: number): Promise<ProdutosInterface> {
    return new Promise((resolve) => {
      this.get(`/produtos/${id}`).subscribe((res: any) => {
        if (res) {
          resolve(res);
        }
      });
    });
  }

  async EditarProduto(
    id: number,
    produto: ProdutosInterface
  ): Promise<boolean> {
    return new Promise((resolve) => {
      this.put(`/produtos/${id}`, produto).subscribe((res: any) => {
        resolve(res);
      });
    });
  }
}
