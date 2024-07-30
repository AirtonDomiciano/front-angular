import { Component, OnInit, ViewChild } from '@angular/core';
import { ServicosService } from 'src/app/services/servicos.service';
import { Router } from '@angular/router';
import { TempoInterface } from 'src/app/shared/interface/tempo.interface';
import { HorarioService } from 'src/app/services/horario-servico.service';
import HorarioServicoModel from './model/horario-servico.model';
import { OpcoesDropdownInterface } from 'src/app/shared/interface/opcoes-dropdown.interface';
import { PagamentoComponent } from '../pagamento/pagamento.component';
import { ContasReceberService } from 'src/app/services/contas-receber.service';
import { ParcelasService } from 'src/app/services/parcelas.service';
import ContasReceberModel from './model/contas-receber.model';
import { AtendimentoService } from 'src/app/services/atendimento.service';
import ServicosModel from './model/servicos.model';
import HorarioServico from 'src/app/shared/model/horario-servico';

@Component({
  selector: 'app-atendimento',
  templateUrl: './atendimentos.component.html',
  styleUrls: ['./atendimentos.component.scss'],
})
export class AtendimentosComponent implements OnInit {
  @ViewChild('pagamento')
  pagamentoComponent!: PagamentoComponent;

  public setarOpcoesDropdown: OpcoesDropdownInterface[] = [];
  public lista: ServicosModel[] = [];
  public status: number = 0;
  public mostrar: boolean = false;
  public idAtendimento: number = 0;

  constructor(
    private atendimentoService: AtendimentoService,
    private servicosService: ServicosService,
    private horarioService: HorarioService,
    private contasReceberService: ContasReceberService,
    private parcelasService: ParcelasService,
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

  emitterDropDownClick($event: any) {
    const id = this.lista[$event.idx]?.idAtendimento || 0;

    switch ($event.id) {
      case 'id-edit-atendimento':
        this.editarAtendimento(id);
        break;
      case 'id-init-atendimento':
        this.iniciar(id);
        break;
      case 'id-finalizar-atendimento':
        this.finalizar(id);
        break;
      case 'id-cancelar-atendimento':
        this.cancelar(id);
        break;
      case 'id-restaurar-atendimento':
        this.restaurar(id);
        break;
      case 'id-pagar-atendimento':
        this.mostrarPagamento($event.idx);
        break;
      default:
        break;
    }
  }

  adicionarAtendimento() {
    this.router.navigate([`private/atendimento`]);
  }

  editarAtendimento(id: number) {
    this.router.navigate([`private/atendimento/${id}`]);
  }

  async iniciar(id: number): Promise<void> {
    const res = await this.servicosService.buscarPorIdAtendimento(id);
    res.status = 2;
    await this.servicosService.salvar(res);

    const input: HorarioServico = {
      idServicos: res.idServicos!,
      horarioInicio: new Date(),
    };

    await this.horarioService.salvar(input);

    await this.inicializarListaAtendimentos();
  }

  async finalizar(id: number): Promise<void> {
    const res = await this.servicosService.buscarPorIdAtendimento(id);

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

  async cancelar(id: number) {
    const res = await this.servicosService.buscarPorIdAtendimento(id);
    res.status = 0;
    await this.servicosService.salvar(res);

    await this.contasReceberService.deletarPorIdAtendimento(id);

    await this.inicializarListaAtendimentos();
  }

  async restaurar(id: number) {
    const res = await this.servicosService.buscarPorIdAtendimento(id);

    const atendimento = await this.atendimentoService.buscarAtendimentoPorId(
      id
    );

    let horario;
    let contaReceber;

    if (res.status !== 0) {
      contaReceber = await this.contasReceberService.buscarPorIdAtendimento(id);
      horario = await this.horarioService.buscarHorarioPorIdServico(
        res.idServicos!
      );
    }

    if (contaReceber && horario) {
      await this.parcelasService.deletarPorIdContasReceber(
        contaReceber.idContasReceber!
      );
      await this.contasReceberService.deletarPorIdAtendimento(id);
      await this.horarioService.deletarHorario(horario.idHorario!);
    }

    const salvar: ContasReceberModel = {
      idAtendimento: id,
      idClientes: res.idClientes,
      valor: atendimento.valor!,
      valorPago: 0,
      pago: false,
    };

    res.status = 1;
    await this.servicosService.salvar(res);
    await this.contasReceberService.salvar(salvar);

    await this.inicializarListaAtendimentos();
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

  async mostrarPagamento(idx: number) {
    const { idAtendimento, valor } = this.lista[idx];
    const contaReceber = await this.contasReceberService.buscarPorIdAtendimento(
      idAtendimento!
    );

    const valorRestante = valor - contaReceber.valorPago!;
    const valorArredondado = parseFloat(valorRestante.toFixed(2));

    this.pagamentoComponent.abrirFormasPagamento({
      idAtendimento,
      valorRestante: valorArredondado,
    });
  }
}
