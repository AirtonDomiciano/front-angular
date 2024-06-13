import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { LocalService } from '../core/services/local.service';
import { Router } from '@angular/router';
import AnimaisModel from '../pages/animais/model/animais.model';
import { Animais } from '../shared/models/animais';

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

  async buscarTodosAnimais(): Promise<Array<AnimaisModel>> {
    return new Promise((resolve) => {
      this.get('/animais').subscribe((res: any) => {
        if (res?.length) {
          resolve(res);
        }
      });
    });
  }

  async buscarAnimalPorId(id: number): Promise<AnimaisModel> {
    return new Promise((resolve) => {
      this.get(`/animais/${id}`).subscribe((res: any) => {
        if (res) {
          resolve(res);
        }
      });
    });
  }

  async deletarAnimal(id: number): Promise<Boolean> {
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
}
