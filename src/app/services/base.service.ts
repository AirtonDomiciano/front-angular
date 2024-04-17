import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IBaseService } from '../core/base/base.interface';

const headers = new HttpHeaders({
  'Cache-Control':
    'no-cache, no-store, must-revalidate, post-check=0, pre-check=0',
  Pragma: 'no-cache',
  Expires: '0',
});
export abstract class BaseService implements IBaseService {
  url = environment.apiUrl;

  constructor(protected http: HttpClient) {}

  get<T>(endpoint: string): Observable<T> {
    return this.http.get<T>(`${this.url}${endpoint}`, { headers });
  }

  post<T>(endpoint: string, body: T): Observable<any> {
    return this.http.post<T>(`${this.url}${endpoint}`, body, { headers });
  }
}
