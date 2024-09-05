import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';
import { Router } from '@angular/router';
import Clientes from 'src/app/shared/model/clientes';
import { ToastMessageService } from 'src/app/shared/services/toast-message.service';
import { ClienteModel } from '../cliente/model/cliente.model';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss'],
})
export class ClientesComponent implements OnInit {
  public listaClientes: Clientes[] = [];
  public mostrarAtivos = true;

  constructor(
    private clientesService: ClientesService,
    private router: Router,
    private toast: ToastMessageService
  ) {}

  async ngOnInit(): Promise<void> {
    this.filtrar();
  }

  adicionarCliente() {
    this.router.navigate([`private/cliente`]);
  }

  editarCliente(id: number) {
    this.router.navigate([`private/cliente/${id}`]);
  }

  async filtrar() {
    const res = await this.clientesService.buscarTodosClientes();
    if (!res) {
      alert('DEU Errado');
      return;
    }
    this.listaClientes = res.filter((el) => el.ativo === this.mostrarAtivos);
    this.mostrarAtivos = !this.mostrarAtivos;
  }

  async deletarCliente(cliente: ClienteModel): Promise<void> {
    if (!cliente.idClientes) {
      return;
    }
    if (cliente.ativo) {
      this.toast.mostrarErro('Cliente Ativo não pode ser removido.');
    }
    const res = await this.clientesService.deletarCliente(cliente.idClientes);
    if (res) {
      this.toast.mostrarSucesso('Cliente removido.');
    } else {
      this.toast.mostrarErro('Ops... Ação sem resposta.');
    }
  }
}
