import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { LocalService } from '../core/services/local.service';
import { Router } from '@angular/router';
import { Api } from '../shared/models/api';

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

  async buscarTodasApis(): Promise<Array<Api>> {
    return new Promise((resolve) => {
      this.get('/apis').subscribe((res: any) => {
        if (res) {
          resolve(res);
        }
      });
    });
  }

  async buscarApiPorId(id: number): Promise<Api> {
    return new Promise((resolve) => {
      this.get(`/apis/${id}`).subscribe((res: any) => {
        resolve(res);
      });
    });
  }

  async deletarApi(id: number): Promise<boolean> {
    return new Promise((resolve) => {
      this.delete(`/apis/${id}`).subscribe((res: any) => {
        resolve(res);
      });
    });
  }

  async salvar(api: Api): Promise<boolean> {
    return new Promise((resolve) => {
      this.post('/apis', api).subscribe((res: any) => {
        resolve(res);
      });
    });
  }
}
