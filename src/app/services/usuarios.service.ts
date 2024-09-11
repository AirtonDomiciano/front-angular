import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { LocalService } from '../core/services/local.service';
import Usuario from '../shared/model/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService extends BaseService {
  constructor(
    public router: Router,
    public override http: HttpClient,
    public local: LocalService
  ) {
    super(http);
  }

  async buscarTodosUsuarios(): Promise<Array<Usuario>> {
    return new Promise((resolve) => {
      this.get('/usuarios').subscribe((res: any) => {
        if (res?.length) {
          resolve(res);
        }
      });
    });
  }

  async buscarAtivosInativos(ativo: boolean): Promise<Array<Usuario>> {
    return new Promise((resolve) => {
      this.get(`/usuarios/buscarAtivosInativos/${ativo}`).subscribe(
        (res: any) => {
          if (res?.length) {
            resolve(res);
          }
        }
      );
    });
  }

  async deletarUsuario(id: number): Promise<boolean> {
    return new Promise((resolve) => {
      this.delete(`/usuarios/${id}`).subscribe((res: any) => {
        resolve(res);
      });
    });
  }

  async buscarUsuarioPorId(id: number): Promise<Usuario> {
    return new Promise<Usuario>((resolve) => {
      this.get(`/usuarios/${id}`).subscribe((res: any) => {
        resolve(res);
      });
    });
  }

  async salvar(usuario: Usuario): Promise<boolean> {
    return new Promise((resolve) => {
      this.post('/usuarios', usuario).subscribe((res: any) => {
        resolve(res);
      });
    });
  }
}
