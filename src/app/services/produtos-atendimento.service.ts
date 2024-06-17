import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { LocalService } from '../core/services/local.service';
import { ProdutosAtendimentoInterface } from '../shared/interface/produtos-atendimento.interface';

@Injectable({
  providedIn: 'root',
})
export class ProdutosAtendimentoService extends BaseService {
  constructor(
    public router: Router,
    public override http: HttpClient,
    public local: LocalService
  ) {
    super(http);
  }

  async buscarTodosProdutosAtendimento(): Promise<
    Array<ProdutosAtendimentoInterface>
  > {
    return new Promise((resolve) => {
      this.get('/produtos-atendimento').subscribe((res: any) => {
        if (res) {
          resolve(res);
        }
      });
    });
  }

  async deletarProdutoAtendimento(id: number): Promise<boolean> {
    return new Promise((resolve) => {
      this.delete(`/produtos-atendimento/${id}`).subscribe((res: any) => {
        resolve(res);
      });
    });
  }

  async buscarProdutoAtendimentoPorId(
    id: number
  ): Promise<ProdutosAtendimentoInterface> {
    return new Promise((resolve) => {
      this.get(`/produtos-atendimento/${id}`).subscribe((res: any) => {
        if (res) {
          resolve(res);
        } else {
          console.error('Ero!');
        }
      });
    });
  }

  async salvar(
    produtoAtendimento: ProdutosAtendimentoInterface
  ): Promise<boolean> {
    return new Promise((resolve) => {
      this.post('/produtos-atendimento', produtoAtendimento).subscribe(
        (res: any) => {
          resolve(res);
        }
      );
    });
  }
}
