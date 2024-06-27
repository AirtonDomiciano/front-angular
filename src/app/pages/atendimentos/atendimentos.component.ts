import { Component, OnInit } from '@angular/core';
import { ServicosService } from 'src/app/services/servicos.service';
import { Router } from '@angular/router';
import { ServicosDto } from 'src/app/shared/dtos/servicos.dto';
import { TempoInterface } from 'src/app/shared/interface/tempo.interface';
import { ServicosModel } from './model/servicos-model';
import { HorarioService } from 'src/app/services/horario-servico.service';
import { HorarioInterface } from 'src/app/shared/interface/horario-servico';
import { OpcoesDropdownInterface } from './interface/opcoes-dropdown.interface';

@Component({
  selector: 'app-atendimento',
  templateUrl: './atendimentos.component.html',
  styleUrls: ['./atendimentos.component.scss'],
})
export class AtendimentosComponent implements OnInit {
  public setarOpcoesDropdown: OpcoesDropdownInterface[] = [];
  public lista: ServicosDto[] = [];
  public status: number = 0;

  constructor(
    private servicosService: ServicosService,
    private horarioService: HorarioService,
    private router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    await this.inicializarListaAtendimentos();
  }

  inicializarStatus(status: number) {
    this.status = status;
  }

  async inicializarListaAtendimentos() {
    this.lista = await this.servicosService.listandoServicosClientesAnimais();
  }

  adicionarAtendimento() {
    this.router.navigate([`private/atendimento`]);
  }

  editarAtendimento(id: number) {
    this.router.navigate([`private/atendimento/${id}`]);
  }

  async iniciarServico(servico: ServicosModel): Promise<void> {
    for (let opcao of this.setarOpcoesDropdown) {
      opcao.nomeOpcao === 'Finalizar Serviço' ? true : false;
    }

    const res = await this.servicosService.buscarPorIdAtendimento(
      servico.idAtendimento!
    );
    for (let servico of res) {
      servico.status = 2;
      await this.servicosService.salvar(servico);

      const input: HorarioInterface = {
        idServicos: servico.idServicos!,
        horarioInicio: new Date(),
      };

      await this.horarioService.salvar(input);
    }

    await this.inicializarListaAtendimentos();
  }

  async finalizarServico(servico: ServicosModel): Promise<void> {
    const res = await this.servicosService.buscarPorIdAtendimento(
      servico.idAtendimento!
    );

    for (let servico of res) {
      const input = await this.horarioService.buscarHorarioPorIdServico(
        servico.idServicos!
      );

      input.horarioTermino = new Date();
      input.horarioInicio = new Date(input.horarioInicio!);

      const tempoServicoMilisegundos =
        input.horarioTermino.getTime() - input.horarioInicio!.getTime();

      const tempoServico = this.conversaoMilisegundos(tempoServicoMilisegundos);

      servico.tempo = tempoServico;
      servico.status = 3;

      await this.horarioService.salvar(input);
      await this.servicosService.salvar(servico);
    }

    await this.inicializarListaAtendimentos();
  }

  async cancelarServico(servico: ServicosModel) {
    for (let opcao of this.setarOpcoesDropdown) {
      opcao.nomeOpcao === 'Restaurar Serviço' ? true : false;
    }
    for (let opcao of this.setarOpcoesDropdown) {
      opcao.nomeOpcao === 'Restaurar Serviço' ? true : false;
    }

    const res = await this.servicosService.buscarPorIdAtendimento(
      servico.idAtendimento!
    );
    for (let servico of res) {
      servico.status = 0;
      await this.servicosService.salvar(servico);
    }

    await this.inicializarListaAtendimentos();
  }

  async restaurarServico(servico: ServicosModel) {
    for (let opcao of this.setarOpcoesDropdown) {
      opcao.nomeOpcao === 'Iniciar Serviço' ||
      opcao.nomeOpcao === 'Cancelar Serviço'
        ? true
        : false;
    }
    const res = await this.servicosService.buscarPorIdAtendimento(
      servico.idAtendimento!
    );

    for (let servico of res) {
      servico.status = 1;
      await this.servicosService.salvar(servico);

      await this.inicializarListaAtendimentos();

      const input = await this.horarioService.buscarHorarioPorIdServico(
        servico.idServicos!
      );
      await this.horarioService.deletarHorario(input.idHorario!);
    }
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
