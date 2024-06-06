import { Component, OnInit } from '@angular/core';
import { AtendimentoService } from 'src/app/services/atendimento.service';
import { AtendimentoModel } from './model/atendimento.model';
import { Atendimentos } from 'src/app/shared/interface/atendimento.interface';
import { ClientesService } from 'src/app/services/clientes.service';
import { Servicoservice } from 'src/app/services/servicos.service';

@Component({
  selector: 'app-atendimento',
  templateUrl: './atendimento.component.html',
  styleUrls: ['./atendimento.component.scss'],
})
export class AtendimentoComponent implements OnInit {
  constructor(
    private atendimentoService: AtendimentoService,
    private clientesService: ClientesService,
    private servicosService: Servicoservice
  ) {}

  public listaAtendimentos: AtendimentoModel[] = [];
  public listaReceberAtendimentos: Atendimentos[] = [];

  async ngOnInit(): Promise<void> {
    this.listaAtendimentos =
      await this.atendimentoService.buscarTodosAtendimentos();
    this.buscaDadosPorId();
  }

  async buscaDadosPorId() {
    for (let atendimento of this.listaAtendimentos) {
      const cliente = await this.clientesService.buscarClientePorId(
        atendimento.idClientes
      );
      const servico = await this.servicosService.buscarServicoPorId(
        atendimento.idServicos
      );

      const input: Atendimentos = {
        nomeCliente: cliente.nomeClientes,
        nomeAnimal: '',
        nomeServico: servico.nomeServico,
      };
      this.listaReceberAtendimentos.push(input);
    }
  }
}
