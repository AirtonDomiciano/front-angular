import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { LocalService } from '../core/services/local.service';
import { Router } from '@angular/router';
import AnimaisModel from '../pages/animais/model/animais.model';
import TabelaAnimais from '../pages/animais/model/tabela-animais.model';
import Animais from '../shared/model/animais';

@Injectable({
  providedIn: 'root',
})
export class AnimaisService extends BaseService {
  constructor(
    public override http: HttpClient,
    public route: Router,
    public local: LocalService
  ) {
    super(http);
  }

  async buscarPorId(id: number): Promise<AnimaisModel> {
    return new Promise((resolve) => {
      this.get(`/animais/${id}`).subscribe((res: any) => {
        if (res) {
          resolve(res);
        }
      });
    });
  }

  async deletar(id: number): Promise<boolean> {
    return new Promise((resolve) => {
      this.delete(`/animais/${id}`).subscribe((res: any) => {
        resolve(res);
      });
    });
  }

  async salvar(animal: Animais): Promise<boolean> {
    return new Promise((resolve) => {
      this.post('/animais', animal).subscribe((res: any) => {
        resolve(res);
      });
    });
  }

  async buscarAtivosInativos(ativo: boolean): Promise<Array<TabelaAnimais>> {
    return new Promise((resolve) => {
      this.get(`/animais/animaisclientes/${ativo}`).subscribe((res?: any) => {
        resolve(res);
      });
    });
  }

  async buscarPorIdClientes(id: number): Promise<Array<Animais>> {
    return new Promise((resolve) => {
      this.get(`/animais/buscarPorIdClientes/${id}`).subscribe((res: any) => {
        resolve(res);
      });
    });
  }
}
