import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { LocalService } from '../core/services/local.service';
import HorarioServico from '../shared/model/horario-servico';

@Injectable({
  providedIn: 'root',
})
export class HorarioService extends BaseService {
  constructor(
    public router: Router,
    public override http: HttpClient,
    public local: LocalService
  ) {
    super(http);
  }

  async buscarTodosHorarios(): Promise<Array<HorarioServico>> {
    return new Promise((resolve) => {
      this.get('/horario-servico').subscribe((res: any) => {
        if (res) {
          resolve(res);
        }
      });
    });
  }

  async deletarHorario(id: number): Promise<boolean> {
    return new Promise((resolve) => {
      this.delete(`/horario-servico/${id}`).subscribe((res: any) => {
        resolve(res);
      });
    });
  }

  async buscarHorarioPorIdServico(id: number): Promise<HorarioServico> {
    return new Promise((resolve) => {
      this.get(`/horario-servico/${id}`).subscribe((res: any) => {
        if (res) {
          resolve(res);
        } else {
          console.error('Horário não encontrado!');
        }
      });
    });
  }

  async salvar(horario: HorarioServico): Promise<boolean> {
    return new Promise((resolve) => {
      this.post('/horario-servico', horario).subscribe((res: any) => {
        resolve(res);
      });
    });
  }
}
