import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { LocalService } from '../core/services/local.service';
import { Router } from '@angular/router';
import AnimaisModel from '../pages/animais/model/animais-interface.';

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
        if (res?.length) {
          resolve(res);
        }
      });
    });
  }

  async adicionarAnimal(animal: AnimaisModel): Promise<AnimaisModel> {
    return new Promise((resolve) => {
      this.post('/animais', animal).subscribe((res: any) => {
        if (res?.length) {
          resolve(res);
        }
      });
    });
  }

  async deletarAnimal(id: number): Promise<void> {
    return new Promise((resolve) => {
      this.delete(`/animais/${id}`).subscribe((res: any) => {
        if (res?.length) {
          resolve(res);
        }
      });
    });
  }

  async editarAnimal(id: number, animal: AnimaisModel): Promise<AnimaisModel> {
    return new Promise((resolve) => {
      this.put(`/animais/${id}`, animal).subscribe((res: any) => {
        if (res?.length) {
          resolve(res);
        }
      });
    });
  }
}
