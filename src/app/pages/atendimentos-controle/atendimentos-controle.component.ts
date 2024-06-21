import { Component, OnInit } from '@angular/core';
import { ServicosService } from 'src/app/services/servicos.service';
import { HorarioService } from 'src/app/services/horario-servico.service';
import { TempoInterface } from 'src/app/shared/interface/tempo.interface';
import { ServicosDto } from 'src/app/shared/dtos/servicos.dto';
import { ServicosModel } from './model/servicos-model';
import { HorarioInterface } from 'src/app/shared/interface/horario-servico';

@Component({
  selector: 'app-atendimento',
  templateUrl: './atendimentos-controle.component.html',
  styleUrls: ['./atendimentos-controle.component.scss'],
})
export class AtendimentosControleComponent implements OnInit {
  constructor(
    private servicosService: ServicosService,
    private horarioService: HorarioService
  ) {}

  public lista: ServicosDto[] = [];

  async ngOnInit(): Promise<void> {
    await this.inicializarListaAtendimentos();
  }

  async inicializarListaAtendimentos() {
    this.lista = await this.servicosService.listandoServicosClientesAnimais();
  }

  inicializarBadges(servico: ServicosDto) {
    let nomeBadge = '';
    let classeBadge = '';
    switch (servico.status) {
      case 0:
        classeBadge = 'badge-danger';
        nomeBadge = 'Cancelado';
        break;

      case 1:
        classeBadge = 'badge-warning';
        nomeBadge = 'Em espera';
        break;

      case 2:
        classeBadge = 'badge-primary';
        nomeBadge = 'Em andamento';
        break;

      case 3:
        classeBadge = 'badge-success';
        nomeBadge = 'Concluído';
        break;
    }
    return { classeBadge, nomeBadge };
  }

  async iniciarServico(servico: ServicosModel): Promise<void> {
    const res = await this.servicosService.buscarServicoPorId(
      servico.idServicos!
    );

    res.status = 2;
    await this.servicosService.salvar(res);

    const input: HorarioInterface = {
      idServicos: res.idServicos!,
      horarioInicio: new Date(),
    };

    await this.horarioService.salvar(input);

    await this.inicializarListaAtendimentos();
  }

  async finalizarServico(servico: ServicosModel): Promise<void> {
    const res = await this.servicosService.buscarServicoPorId(
      servico.idServicos!
    );

    const input = await this.horarioService.buscarHorarioPorIdServico(
      res.idServicos!
    );

    input.horarioTermino = new Date();
    input.horarioInicio = new Date(input.horarioInicio!);

    const tempoServicoMilisegundos =
      input.horarioTermino.getTime() - input.horarioInicio!.getTime();

    const tempoServico = this.conversaoMilisegundos(tempoServicoMilisegundos);

    res.tempo = tempoServico;
    res.status = 3;

    await this.horarioService.salvar(input);
    await this.servicosService.salvar(res);

    await this.inicializarListaAtendimentos();
  }

  async cancelarAtendimento(servico: ServicosModel) {
    const res = await this.servicosService.buscarServicoPorId(
      servico.idServicos!
    );

    res.status = 0;
    await this.servicosService.salvar(res);

    await this.inicializarListaAtendimentos();
  }

  async restaurarAtendimento(servico: ServicosModel) {
    const res = await this.servicosService.buscarServicoPorId(
      servico.idServicos!
    );

    res.status = 1;
    await this.servicosService.salvar(res);

    await this.inicializarListaAtendimentos();

    const input = await this.horarioService.buscarHorarioPorIdServico(
      res.idServicos!
    );
    await this.horarioService.deletarHorario(input.idHorario!);
  }

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
