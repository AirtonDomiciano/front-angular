import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { LocalService } from '../core/services/local.service';
import { UsuariosInterface } from '../pages/usuarios/model/usuarios.interface';
import { UsuariosModel } from '../pages/usuarios/model/usuarios.model';

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

  async buscarTodosUsuarios(): Promise<Array<UsuariosInterface>> {
    return new Promise((resolve) => {
      this.get('/usuarios').subscribe((res: any) => {
        if (res?.length) {
          resolve(res);
        }
      });
    });
  }

  async deletarUsuario(id: number): Promise<boolean> {
    return new Promise((resolve) => {
      this.delete('/usuarios', id).subscribe((res: any) => {
        resolve(res);
      });
    });
  }

  async CriarUsuario(
    usuario: UsuariosInterface
  ): Promise<Array<UsuariosModel>> {
    return new Promise((resolve) => {
      this.post('/usuarios', usuario).subscribe((res: any) => {
        if (res?.length) {
          resolve(res);
        }
      });
    });
  }

  async buscarUsuarioPorId(id: number): Promise<UsuariosInterface> {
    return new Promise((resolve) => {
      this.getById('/usuarios', id).subscribe((res: any) => {
        resolve(res);
      });
    });
  }

  async EditarUsuario(
    id: number,
    usuario: UsuariosInterface
  ): Promise<UsuariosInterface> {
    return new Promise((resolve) => {
      this.put('/usuarios', id, usuario).subscribe((res: any) => {
        if (res) {
          resolve(res);
        }
      });
    });
  }
}
