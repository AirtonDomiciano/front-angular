import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';
import { Router } from '@angular/router';
import Clientes from 'src/app/shared/model/clientes';
import { ToastMessageService } from 'src/app/shared/services/toast-message.service';

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

  async deletarCliente(id: number) {
    const res = await this.clientesService.deletarCliente(id);

    if (res) {
      this.toast.mostrarSucesso('Cliente removido com sucesso!');
    } else {
      this.toast.mostrarErro(
        'Não foi possivel remover este cliente, pois já está vinculado no atendimento.'
      );
    }
  }
}
