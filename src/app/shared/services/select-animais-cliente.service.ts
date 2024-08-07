import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BaseService } from 'src/app/services/base.service';
import { LocalService } from 'src/app/core/services/local.service';
@Injectable({
  providedIn: 'root',
})
export class SelectAnimaisClienteService extends BaseService {
  constructor(
    public router: Router,
    public override http: HttpClient,
    public local: LocalService
  ) {
    super(http);
  }

  //   async BuscarAnimais(): Promise<Array<>> {
  //     return new Promise((resolve) => {
  //       this.get('/cidades').subscribe((res: any) => {
  //         if (res) {
  //           resolve(res);
  //         }
  //       });
  //     });
  //   }
}
