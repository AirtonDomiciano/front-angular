import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';

@Injectable()
export class ExampleService extends BaseService {
  constructor(override http: HttpClient) {
    super(http);
  }

  //   Chamando o método  para ir na API
  metodoExample(example: string): Observable<Response<boolean>> {
    // super.post método generico usado para comunicar com API
    // '/example' é o controler
    // { example } parametro que está sendo passado
    return super.post('/example', { example });
  }
}
