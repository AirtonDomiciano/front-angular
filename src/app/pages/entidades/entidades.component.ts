import { Component, OnInit } from '@angular/core';
import { EntidadesService } from 'src/app/services/entidades.service';

@Component({
  selector: 'app-entidades',
  templateUrl: './entidades.component.html',
  styleUrls: ['./entidades.component.scss'],
})
export class EntidadesComponent implements OnInit {
  public listaEntidades: any = [];

  constructor(public entidadesService: EntidadesService) {}
  async ngOnInit(): Promise<void> {
    this.buscarTodasEntidades();
  }

  async buscarTodasEntidades() {
    const res = await this.entidadesService.BuscarTodasEntidades();
    if (res) {
      this.listaEntidades = res;
    }
    return res;
  }
}
