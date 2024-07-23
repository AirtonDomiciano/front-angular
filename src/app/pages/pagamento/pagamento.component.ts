import { Component, OnInit } from '@angular/core';
import FormaPagamento from 'src/app/shared/interface/formas-pagamento.interface';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ContasReceberService } from 'src/app/services/contas-receber.service';
import { ServicosService } from 'src/app/services/servicos.service';
import { ListaFormasPagamento } from './const/formas-pagamento.const';
import PagamentoModel from './model/pagamento.model';
import { ParcelasService } from 'src/app/services/parcelas.service';
import ParcelasModel from './model/parcelas.model';

export interface Pagamentos {
  idAtendimento: number;
  valor: number;
  formaPagamento?: FormaPagamento;
}

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.scss'],
})
export class PagamentoComponent implements OnInit {
  public formGroup!: FormGroup;
  public model: PagamentoModel = new PagamentoModel();

  public idAtendimento: number = 0;
  public mostrar: boolean = false;
  public valor: number = 0;
  public formasDePagamento = ListaFormasPagamento;
  public formaSelecionada: FormaPagamento = {
    idFormasDePagamento: 0,
    nomeFormaPagamento: '',
  };
  public valorValido: boolean = true;
  public pagarValorRestante: boolean = false;

  constructor(
    private fb: FormBuilder,
    private servicosService: ServicosService,
    private contasReceberService: ContasReceberService,
    private parcelasService: ParcelasService
  ) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group(this.model);
  }

  onHide() {
    this.formaSelecionada = { idFormasDePagamento: 0, nomeFormaPagamento: '' };
  }

  async abrirFormasPagamento(pagamentos: Pagamentos) {
    const contaReceber = await this.contasReceberService.buscarPorIdAtendimento(
      pagamentos.idAtendimento
    );
    this.idAtendimento = pagamentos.idAtendimento;
    this.valor = pagamentos.valor - contaReceber.valorPago!;
    this.mostrar = true;
  }

  async onSubmit() {
    const input: PagamentoModel = this.formGroup.value;
    const servico = await this.servicosService.buscarPorIdAtendimento(
      this.idAtendimento
    );
    const contaReceber = await this.contasReceberService.buscarPorIdAtendimento(
      this.idAtendimento
    );

    const parcela: ParcelasModel = {
      idContasReceber: contaReceber.idContasReceber!,
      idFormasDePagamento: this.formaSelecionada.idFormasDePagamento,
      valorParcela: input.valor,
      dataPgto: new Date(),
    };

    const valorPago = contaReceber.valorPago! + input.valor;
    contaReceber.valorPago! = valorPago;

    if (contaReceber.valor === valorPago) {
      contaReceber.pago = true;
      contaReceber.dataPgto = new Date();
      servico.status = 4;
    }

    const res = await Promise.all([
      this.servicosService.salvar(servico),
      this.contasReceberService.salvar(contaReceber),
      this.parcelasService.salvar(parcela),
    ]);

    if (res) {
      alert('Foi');
    }
  }

  emitterValorVerificado(event: boolean) {
    this.valorValido = event;
  }

  setarValorRestante() {
    if (this.pagarValorRestante) {
      this.formGroup.controls['valor'].setValue(this.valor);
      return;
    }
    this.formGroup.controls['valor'].setValue(0);
  }
}
