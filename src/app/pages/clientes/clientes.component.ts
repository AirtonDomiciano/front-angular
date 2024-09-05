import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';
import { Router } from '@angular/router';
import Clientes from 'src/app/shared/model/clientes';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss'],
})
export class ClientesComponent implements OnInit {
  public listaClientes: Clientes[] = [];
  public ativos: boolean = true;

  constructor(
    public clientesService: ClientesService,
    private router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    this.buscarClientes(this.ativos);
  }

  adicionarCliente() {
    this.router.navigate([`private/cliente`]);
  }

  editarCliente(id: number) {
    this.router.navigate([`private/cliente/${id}`]);
  }

  async buscarClientes(ativo: boolean) {
    const res = await this.clientesService.buscarAtivosInativos(ativo);

    if (!res) {
      alert('DEU Errado');
      return;
    }

    this.listaClientes = res;
  }

  async deletarCliente(id: number) {
    const res = await this.clientesService.deletarCliente(id);

    if (!res) {
      alert('Deu ruim');
      return;
    }

    await this.buscarClientes(this.ativos);
  }
}
