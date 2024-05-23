import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';
import ClientesInterface from './model/clientes.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss'],
})
export class ClientesComponent implements OnInit {
  public listaClientes: ClientesInterface[] = [];

  constructor(
    public clientesService: ClientesService,
    private router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    this.buscarClientes();
  }

  adicionarCliente() {
    this.router.navigate([`private/cliente`]);
  }

  async buscarClientes() {
    const res = await this.clientesService.BuscarTodosClientes();

    if (!res) {
      alert('DEU Errado');
      return;
    }

    this.listaClientes = res;
  }

  async deletarCliente(id: number) {
    const res = await this.clientesService.DeletarCliente(id);

    if (!res) {
      alert('Deu ruim');
      return;
    }
  }
}
