import { Component, OnInit, ViewChild } from '@angular/core';
import { ServicosService } from 'src/app/services/servicos.service';
import { Router } from '@angular/router';
import { OpcoesDropdownInterface } from 'src/app/shared/interface/opcoes-dropdown.interface';
import { ContasReceberService } from 'src/app/services/contas-receber.service';
import { AtendimentoService } from 'src/app/services/atendimento.service';
import ServicosModel from './model/servicos.model';
import { ToastMessageService } from 'src/app/shared/services/toast-message.service';
import { ComplementoComponent } from 'src/app/shared/components/complemento/complemento.component';

@Component({
  selector: 'app-atendimento',
  templateUrl: './atendimentos.component.html',
  styleUrls: ['./atendimentos.component.scss'],
})
export class AtendimentosComponent implements OnInit {
  @ViewChild('recebimento')
  complementoComponent!: ComplementoComponent;

  public setarOpcoesDropdown: OpcoesDropdownInterface[] = [];
  public lista: ServicosModel[] = [];
  public status: number = 0;
  public mostrar: boolean = false;
  public idAtendimento: number = 0;

  constructor(
    private atendimentoService: AtendimentoService,
    private servicosService: ServicosService,
    private contasReceberService: ContasReceberService,
    private router: Router,
    private toast: ToastMessageService
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
        this.onIniciar(id);
        break;
      case 'id-finalizar-atendimento':
        this.onFinalizar(id);
        break;
      case 'id-cancelar-atendimento':
        this.onCancelar(id);
        break;
      case 'id-restaurar-atendimento':
        this.onRestaurar(id);
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

  async onIniciar(id: number): Promise<void> {
    const res = await this.atendimentoService.iniciar(id);

    if (res) {
      this.toast.mostrarSucesso('Serviço iniciado!');
    }
    await this.inicializarListaAtendimentos();
  }

  async onFinalizar(id: number): Promise<void> {
    const res = await this.atendimentoService.finalizar(id);

    if (res) {
      this.toast.mostrarSucesso('Serviço Finalizado!');
    }
    await this.inicializarListaAtendimentos();
  }

  async onCancelar(id: number) {
    const res = await this.atendimentoService.cancelar(id);

    if (res) {
      this.toast.mostrarSucesso('Serviço Cancelado!');
    }
    await this.inicializarListaAtendimentos();
  }

  async onRestaurar(id: number) {
    const res = await this.atendimentoService.restaurar(id);

    if (res) {
      this.toast.mostrarSucesso('Serviço Restaurado!');
    }
    await this.inicializarListaAtendimentos();
  }

  async mostrarPagamento(idx: number) {
    const { idAtendimento, valor } = this.lista[idx];
    const contaReceber = await this.contasReceberService.buscarPorIdAtendimento(
      idAtendimento!
    );

    const valorRestante = valor - contaReceber.valorPago!;
    const valorArredondado = parseFloat(valorRestante.toFixed(2));

    this.complementoComponent.abrirComplemento({
      idAtendimento,
      valorRestante: valorArredondado,
      pagamento: false,
      recebimento: true,
    });
  }
}
