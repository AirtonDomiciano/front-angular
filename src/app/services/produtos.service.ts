import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { LocalService } from '../core/services/local.service';
import Produto from '../shared/model/produtos';
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

  async BuscarTodosProdutos(): Promise<Array<Produto>> {
    return new Promise((resolve) => {
      this.get('/produtos').subscribe((res: any) => {
        if (res) {
          resolve(res);
        }
      });
    });
  }

  async BuscarTodosComEstoque(): Promise<Array<Produto>> {
    return new Promise((resolve) => {
      this.get('/produtos/buscarTodosComEstoque').subscribe((res: any) => {
        if (res) {
          resolve(res);
        }
      });
    });
  }

  async deletarProduto(id: number): Promise<boolean> {
    return new Promise((resolve) => {
      this.delete(`/produtos/${id}`).subscribe((res: any) => {
        resolve(res);
      });
    });
  }

  async BuscarProdutoPorId(id: number): Promise<Produto> {
    return new Promise((resolve) => {
      this.get(`/produtos/${id}`).subscribe((res: any) => {
        if (res) {
          resolve(res);
        }
      });
    });
  }
  async salvar(produto: Produto): Promise<boolean> {
    return new Promise((resolve) => {
      this.post('/produtos', produto).subscribe((res: any) => {
        resolve(res);
      });
    });
  }

  async buscarAtivosInativos(ativo: boolean): Promise<Array<Produto>> {
    return new Promise((resolve) => {
      this.get(`/produtos/buscarAtivosInativos/${ativo}`).subscribe(
        (res?: any) => {
          resolve(res);
        }
      );
    });
  }
}
