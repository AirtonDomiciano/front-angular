import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';

@Injectable()
export class ExampleService extends BaseService {
  constructor(override http: HttpClient) {
    super(http);
  }

  metodoExample(example: string): Observable<Response<any>> {
    return super.get('/users');
  }
}
