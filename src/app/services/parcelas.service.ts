import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { LocalService } from '../core/services/local.service';
import Parcelas from '../shared/models/parcelas';

@Injectable({
  providedIn: 'root',
})
export class ParcelasService extends BaseService {
  constructor(
    public router: Router,
    public override http: HttpClient,
    public local: LocalService
  ) {
    super(http);
  }

  async buscarTodos(): Promise<Array<Parcelas>> {
    return new Promise((resolve) => {
      this.get('/parcelas').subscribe((res: any) => {
        if (res) {
          resolve(res);
        }
      });
    });
  }

  async deletar(id: number): Promise<boolean> {
    return new Promise((resolve) => {
      this.delete(`/parcelas/${id}`).subscribe((res: any) => {
        resolve(res);
      });
    });
  }

  async deletarPorIdContasReceber(id: number): Promise<boolean> {
    return new Promise((resolve) => {
      this.delete(`/parcelas/deletarPorIdContasReceber/${id}`).subscribe(
        (res: any) => {
          resolve(res);
        }
      );
    });
  }

  async buscarPorId(id: number): Promise<Parcelas> {
    return new Promise((resolve) => {
      this.get(`/parcelas/${id}`).subscribe((res: any) => {
        if (res) {
          resolve(res);
        } else {
          console.error('Ero!');
        }
      });
    });
  }

  async buscarPorIdContasReceber(id: number): Promise<Parcelas> {
    return new Promise((resolve) => {
      this.get(`/parcelas/buscarPorIdContasReceber/${id}`).subscribe(
        (res: any) => {
          if (res) {
            resolve(res);
          } else {
            console.error('Ero!');
          }
        }
      );
    });
  }

  async salvar(parcela: Parcelas): Promise<boolean> {
    return new Promise((resolve) => {
      this.post('/parcelas', parcela).subscribe((res: any) => {
        resolve(res);
      });
    });
  }
}
