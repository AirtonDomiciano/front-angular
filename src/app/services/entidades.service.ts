import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { LocalService } from '../core/services/local.service';
import EntidadesInterface from '../pages/entidades/model/entidades.interface';

@Injectable({
  providedIn: 'root',
})
export class EntidadesService extends BaseService {
  constructor(
    public router: Router,
    public override http: HttpClient,
    public local: LocalService
  ) {
    super(http);
  }

  async BuscarTodasEntidades(): Promise<Array<EntidadesInterface>> {
    return new Promise((resolve) => {
      this.get('/entidades').subscribe((res: any) => {
        if (res?.length) {
          resolve(res);
        }
      });
    });
  }
}
