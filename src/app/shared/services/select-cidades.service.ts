import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BaseService } from 'src/app/services/base.service';
import { LocalService } from 'src/app/core/services/local.service';
import Cidades from '../model/cidades';
@Injectable({
  providedIn: 'root',
})
export class SelectCidadesService extends BaseService {
  constructor(
    public router: Router,
    public override http: HttpClient,
    public local: LocalService
  ) {
    super(http);
  }

  async BuscarCidades(): Promise<Array<Cidades>> {
    return new Promise((resolve) => {
      this.get('/cidades').subscribe((res: any) => {
        if (res) {
          resolve(res);
        }
      });
    });
  }
}
