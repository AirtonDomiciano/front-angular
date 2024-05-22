import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { LocalService } from '../core/services/local.service';
import { Router } from '@angular/router';
import { ApisInterface } from '../pages/apis/model/apis.interface';

@Injectable({
  providedIn: 'root',
})
export class ApisService extends BaseService {
  constructor(
    public router: Router,
    public override http: HttpClient,
    public local: LocalService
  ) {
    super(http);
  }

  async buscarTodasApis(): Promise<Array<ApisInterface>> {
    return new Promise((resolve) => {
      this.get('/apis').subscribe((res: any) => {
        if (res?.length) {
          resolve(res);
        }
      });
    });
  }

  async criarApi(api: ApisInterface): Promise<ApisInterface> {
    return new Promise((resolve) => {
      this.post('/apis', api).subscribe((res: any) => {
        if (res?.length) {
          resolve(res);
        }
      });
    });
  }

  async deletarApi(id: number): Promise<void> {
    return new Promise((resolve) => {
      this.delete('/apis', id).subscribe((res: any) => {
        if (res?.length) {
          resolve(res);
        }
      });
    });
  }

  async editarApi(id: number, api: ApisInterface): Promise<ApisInterface> {
    return new Promise((resolve) => {
      this.put('/apis', id, api).subscribe((res: any) => {
        if (res?.length) {
          resolve(res);
        }
      });
    });
  }
}
