import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';
import ClientesInterface from './model/clientes.interface';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss'],
})
export class ClientesComponent implements OnInit {
  public listaClientes: ClientesInterface[] = [];

  constructor(public clientesService: ClientesService) {}

  async ngOnInit(): Promise<void> {
    this.buscarClientes();
  }

  async buscarClientes() {
    const res = await this.clientesService.BuscarTodosClientes();

    if (!res) {
      alert('DEU Errado');
      return;
    }

    this.listaClientes = res;
  }
}
