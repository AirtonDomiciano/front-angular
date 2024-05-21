import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { LocalService } from '../core/services/local.service';

@Injectable({
  providedIn: 'root',
})
export class RegistroUsuarioService extends BaseService {
  constructor(
    public router: Router,
    public override http: HttpClient,
    public local: LocalService
  ) {
    super(http);
  }

  async RegistroUsuario(
    nome: string,
    sobrenome: string,
    email: string,
    senha: string
  ): Promise<{ status: boolean; message: string }> {
    const registro = { nome, sobrenome, email, senha };

    return new Promise<{ status: boolean; message: string }>((resolve) => {
      this.post('/auth/createUser', registro).subscribe((res: any) => {
        if (res?.success) {
          resolve({ status: res?.success, message: res.message });
        } else {
          resolve({
            status: false,
            message: res.message || 'Falha ao registrar o usuário!',
          });
        }
      });
    });
  }
}
