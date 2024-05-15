import { Component, OnInit } from '@angular/core';
import { EntidadesService } from 'src/app/services/entidades.service';
import EntidadesInterface from './model/entidades.interface';

@Component({
  selector: 'app-entidades',
  templateUrl: './entidades.component.html',
  styleUrls: ['./entidades.component.scss'],
})
export class EntidadesComponent implements OnInit {
  public listaEntidades: EntidadesInterface[] = [];

  constructor(public entidadesService: EntidadesService) {}

  async ngOnInit(): Promise<void> {
    this.buscarEntidades();
  }

  async buscarEntidades() {
    const res = await this.entidadesService.BuscarTodasEntidades();

    if (!res) {
      alert('DEU Errado');
      return;
    }

    this.listaEntidades = res;
  }
}
