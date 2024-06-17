import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { LocalService } from '../core/services/local.service';
import { ServicosAnimalInterface } from '../shared/interface/servicos-animal.interface';

@Injectable({
  providedIn: 'root',
})
export class ServicosAnimalService extends BaseService {
  constructor(
    public router: Router,
    public override http: HttpClient,
    public local: LocalService
  ) {
    super(http);
  }

  async buscarTodosServicos(): Promise<Array<ServicosAnimalInterface>> {
    return new Promise((resolve) => {
      this.get('/servicos-animal').subscribe((res: any) => {
        if (res) {
          resolve(res);
        }
      });
    });
  }
}
