import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BaseService } from 'src/app/services/base.service';
import { LocalService } from 'src/app/core/services/local.service';
import Ufs from '../model/ufs';

@Injectable({
  providedIn: 'root',
})
export class SelectUfsService extends BaseService {
  constructor(
    public router: Router,
    public override http: HttpClient,
    public local: LocalService
  ) {
    super(http);
  }

  async BuscarUfs(): Promise<Array<Ufs>> {
    return new Promise((resolve) => {
      this.get('/ufs').subscribe((res: any) => {
        if (res) {
          resolve(res);
        }
      });
    });
  }
}
