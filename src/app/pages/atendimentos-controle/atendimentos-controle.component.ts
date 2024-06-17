import { Component, OnInit } from '@angular/core';
import { AtendimentoService } from 'src/app/services/atendimento.service';
import { Atendimentos } from 'src/app/shared/interface/atendimento.interface';
import { ClientesService } from 'src/app/services/clientes.service';
import { ServicosService } from 'src/app/services/servicos.service';
import { AtendimentosModel } from '../atendimentos/model/atendimentos.model';
import { HorarioService } from 'src/app/services/horario-servico.service';
import { HorarioInterface } from 'src/app/shared/interface/horario-servico';
import { Atendimento } from 'src/app/shared/models/atendimento';
import { TempoInterface } from 'src/app/shared/interface/tempo.interface';

@Component({
  selector: 'app-atendimento',
  templateUrl: './atendimentos-controle.component.html',
  styleUrls: ['./atendimentos-controle.component.scss'],
})
export class AtendimentosControleComponent implements OnInit {
  constructor(
    private atendimentoService: AtendimentoService,
    private clientesService: ClientesService,
    private servicosService: ServicosService,
    private horarioService: HorarioService
  ) {}

  public lista: AtendimentosModel[] = [];
  public listaAtendimentos: Atendimentos[] = [];

  async ngOnInit(): Promise<void> {
    await this.inicializarListaAtendimentos();
  }

  async inicializarListaAtendimentos() {
    this.lista = [];
    this.listaAtendimentos = [];
    this.lista = await this.atendimentoService.buscarTodosAtendimentos();

    // for (let atendimento of this.lista) {
    //   const cliente = await this.clientesService.buscarClientePorId(
    //     atendimento.idClientes
    //   );
    //   const servico = await this.servicosService.buscarServicoPorId(
    //     atendimento.idServicos
    //   );

    //   const input: Atendimentos = {
    //     idAtendimento: atendimento.idAtendimento,
    //     nomeCliente: cliente.nomeClientes,
    //     nomeAnimal: 'Rodolfo',
    //     especieAnimal: 'Porco',
    //     nomeServico: servico.nomeServico,
    //     status: atendimento.status,
    //     valor: servico.valor,
    //     tempo: atendimento.tempo,
    //   };
    //   this.listaAtendimentos.push(input);
    // }
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

  // async iniciarServico(atendimento: Atendimentos): Promise<void> {
  //   const res = await this.atendimentoService.buscarAtendimentoPorId(
  //     atendimento.idAtendimento!
  //   );

  //   res.status = 2;
  //   await this.atendimentoService.salvar(res);

  //   const input: HorarioInterface = {
  //     idAtendimento: res.idAtendimento!,
  //     horarioInicio: new Date(),
  //   };

  //   await this.horarioService.salvar(input);

  //   await this.inicializarListaAtendimentos();
  // }

  // async finalizarServico(atendimento: Atendimento): Promise<void> {
  //   const res = await this.atendimentoService.buscarAtendimentoPorId(
  //     atendimento.idAtendimento!
  //   );

  //   const input = await this.horarioService.buscarHorarioPorIdAtendimento(
  //     res.idAtendimento!
  //   );

  //   input.horarioTermino = new Date();
  //   input.horarioInicio = new Date(input.horarioInicio!);

  //   const tempoServicoMilisegundos =
  //     input.horarioTermino.getTime() - input.horarioInicio!.getTime();

  //   const tempoServico = this.conversaoMilisegundos(tempoServicoMilisegundos);

  //   res.tempo = tempoServico;
  //   res.status = 3;

  //   await this.horarioService.salvar(input);
  //   await this.atendimentoService.salvar(res);

  //   await this.inicializarListaAtendimentos();
  // }

  // async cancelarAtendimento(atendimento: Atendimento) {
  //   const res = await this.atendimentoService.buscarAtendimentoPorId(
  //     atendimento.idAtendimento!
  //   );

  //   res.status = 0;
  //   await this.atendimentoService.salvar(res);

  //   await this.inicializarListaAtendimentos();
  // }

  // async restaurarAtendimento(atendimento: Atendimento) {
  //   const res = await this.atendimentoService.buscarAtendimentoPorId(
  //     atendimento.idAtendimento!
  //   );

  //   res.status = 1;
  //   await this.atendimentoService.salvar(res);

  //   await this.inicializarListaAtendimentos();

  //   const input = await this.horarioService.buscarHorarioPorIdAtendimento(
  //     res.idAtendimento!
  //   );
  //   await this.horarioService.deletarHorario(input.idHorario!);
  // }

  conversaoMilisegundos(tempo: number): any {
    let tempoServico: TempoInterface = { horas: 0, minutos: 0, segundos: 0 };
    while (tempo >= 3600000) {
      tempo -= 3600000;
      tempoServico.horas += 1;
    }

    while (tempo >= 60000) {
      tempo -= 60000;
      tempoServico.minutos += 1;
    }

    while (tempo >= 1000) {
      tempo -= 1000;
      tempoServico.segundos += 1;
    }
    const tempoFormatado: any = `${tempoServico.horas}:${tempoServico.minutos}:${tempoServico.segundos}`;

    return tempoFormatado;
  }
}
