import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { LocalService } from '../core/services/local.service';
import MovLctos from '../shared/model/mov-lctos';

@Injectable({
  providedIn: 'root',
})
export class MovLctosService extends BaseService {
  constructor(
    public router: Router,
    public override http: HttpClient,
    public local: LocalService
  ) {
    super(http);
  }

  async buscarTodos(): Promise<Array<MovLctos>> {
    return new Promise((resolve) => {
      this.get('/movlctos').subscribe((res: any) => {
        if (res) {
          resolve(res);
        }
      });
    });
  }

  async deletar(id: number): Promise<boolean> {
    return new Promise((resolve) => {
      this.delete(`/movlctos/${id}`).subscribe((res: any) => {
        resolve(res);
      });
    });
  }

  async buscarPorId(id: number): Promise<MovLctos> {
    return new Promise((resolve) => {
      this.get(`/movlctos/${id}`).subscribe((res: any) => {
        if (res) {
          resolve(res);
        }
      });
    });
  }

  async salvar(movLctos: MovLctos): Promise<boolean> {
    return new Promise((resolve) => {
      this.post('/movlctos', movLctos).subscribe((res: any) => {
        resolve(res);
      });
    });
  }

  async salvarPagamento(id: number, movLctos: MovLctos): Promise<boolean> {
    return new Promise((resolve) => {
      this.post(`/movlctos/salvarPagamento/${id}`, movLctos).subscribe(
        (res: any) => {
          resolve(res);
        }
      );
    });
  }
}
