import { Component, OnInit } from '@angular/core';
import { AtendimentoService } from 'src/app/services/atendimento.service';
import { AtendimentosModel } from './model/atendimentos.model';
import { Atendimentos } from 'src/app/shared/interface/atendimento.interface';
import { ClientesService } from 'src/app/services/clientes.service';
import { ServicosService } from 'src/app/services/servicos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-atendimento',
  templateUrl: './atendimentos.component.html',
  styleUrls: ['./atendimentos.component.scss'],
})
export class AtendimentosComponent implements OnInit {
  constructor(
    private atendimentoService: AtendimentoService,
    private clientesService: ClientesService,
    private servicosService: ServicosService,
    private router: Router
  ) {}

  public lista: AtendimentosModel[] = [];
  public listaAtendimentos: Atendimentos[] = [];

  async ngOnInit(): Promise<void> {
    // await this.inicializarListaAtendimentos();
  }

  // async inicializarListaAtendimentos(): Promise<void> {
  //   this.lista = [];
  //   this.listaAtendimentos = [];
  //   this.lista = await this.atendimentoService.buscarTodosAtendimentos();
  //   for (let atendimento of this.lista) {
  //     const cliente = await this.clientesService.buscarClientePorId(
  //       atendimento.idClientes
  //     );
  //     const servico = await this.servicosService.buscarServicoPorId(
  //       atendimento.idServicos
  //     );

  //     const input: Atendimentos = {
  //       idAtendimento: atendimento.idAtendimento,
  //       nomeCliente: cliente.nomeClientes,
  //       nomeAnimal: 'Rodolfo',
  //       especieAnimal: 'Porco',
  //       nomeServico: servico.nomeServico,
  //       status: atendimento.status,
  //       valor: servico.valor,
  //       tempo: atendimento.tempo,
  //     };
  //     this.listaAtendimentos.push(input);
  //   }
  // }

  adicionarAtendimento() {
    this.router.navigate([`private/atendimento`]);
  }

  // inicializarBadges(atendimento: AtendimentosModel) {
  //   let nomeBadge = '';
  //   let classeBadge = '';
  //   switch (atendimento.status) {
  //     case 0:
  //       classeBadge = 'badge-danger';
  //       nomeBadge = 'Cancelado';
  //       break;

  //     case 1:
  //       classeBadge = 'badge-warning';
  //       nomeBadge = 'Em espera';
  //       break;

  //     case 2:
  //       classeBadge = 'badge-primary';
  //       nomeBadge = 'Em andamento';
  //       break;

  //     case 3:
  //       classeBadge = 'badge-success';
  //       nomeBadge = 'Concluído';
  //       break;
  //   }
  //   return { classeBadge, nomeBadge };
  // }

  editarAtendimento(id: number) {
    this.router.navigate([`private/atendimento/${id}`]);
  }

  async deletarAtendimento(id: number): Promise<void> {
    const res = await this.atendimentoService.deletarAtendimento(id);

    if (res) {
      // this.inicializarListaAtendimentos();
    }
  }
}
