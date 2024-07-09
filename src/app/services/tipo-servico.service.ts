import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { LocalService } from '../core/services/local.service';
import { TipoServicoInterface } from '../shared/interface/tipo-servico.interface';

@Injectable({
  providedIn: 'root',
})
export class TipoServicoService extends BaseService {
  constructor(
    public router: Router,
    public override http: HttpClient,
    public local: LocalService
  ) {
    super(http);
  }

  async buscarTodosServicos(): Promise<Array<TipoServicoInterface>> {
    return new Promise((resolve) => {
      this.get('/tipo-servico').subscribe((res: any) => {
        if (res) {
          resolve(res);
        }
      });
    });
  }

  async buscarServicoPorId(id: number): Promise<TipoServicoInterface> {
    return new Promise((resolve) => {
      this.get(`/tipo-servico/${id}`).subscribe((res: any) => {
        if (res) {
          resolve(res);
        }
      });
    });
  }
}
