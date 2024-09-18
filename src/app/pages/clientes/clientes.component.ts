import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';
import { Router } from '@angular/router';
import Clientes from 'src/app/shared/model/clientes';
import { ToastMessageService } from 'src/app/shared/services/toast-message.service';
import { ClienteModel } from '../cliente/model/cliente.model';
import { ManipulaCampoAtivoService } from 'src/app/services/ativo.service';

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
    private toast: ToastMessageService,
    private manipularAtivosService: ManipulaCampoAtivoService
  ) {}

  async ngOnInit(): Promise<void> {
    this.mostrarAtivos = this.manipularAtivosService.MostrarValorAtivoAtual();
    this.filtrar();
  }

  adicionarCliente() {
    this.router.navigate([`private/cliente`]);
  }

  editarCliente(id: number) {
    this.router.navigate([`private/cliente/${id}`]);
  }

  async filtrar() {
    const res = await this.clientesService.buscarAtivosInativos(
      this.mostrarAtivos
    );
    this.mostrarAtivos = !this.mostrarAtivos;
    this.manipularAtivosService.atualizarValorAtivo(this.mostrarAtivos);

    if (res) {
      this.listaClientes = res;
    } else {
      this.toast.mostrarErro('Ops! Ação sem resposta...');
    }
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
