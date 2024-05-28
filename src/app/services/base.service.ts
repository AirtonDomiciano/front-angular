import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IBaseService } from '../core/base/base.interface';

const headers = new HttpHeaders({
  'Cache-Control':
    'no-cache, no-store, must-revalidate, post-check=0, pre-check=0',
  Pragma: 'no-cache',
  Expires: '0',
  Authorization: `Bearer ${localStorage.getItem('access_token')}`,
});

export abstract class BaseService implements IBaseService {
  private url = environment.apiUrl;

  constructor(public http: HttpClient) {
    if (!this.url?.length) {
      this.url = 'http://localhost:3000';
    }
  }

  public getUrl(): string {
    return this.url;
  }

  get<T>(endpoint: string): Observable<T> {
    return this.http.get<T>(`${this.url}${endpoint}`, { headers });
  }

  post<T>(endpoint: string, body: T): Observable<any> {
    return this.http.post<T>(`${this.url}${endpoint}`, body, { headers });
  }

  delete<T>(endpoint: string): Observable<any> {
    return this.http.delete<T>(`${this.url}${endpoint}`, { headers });
  }

  put<T>(endpoint: string, body: T): Observable<any> {
    return this.http.put<T>(`${this.url}${endpoint}`, body, { headers });
  }
}
