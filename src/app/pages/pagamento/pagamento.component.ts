import { Component, OnInit } from '@angular/core';
import FormaPagamento from 'src/app/shared/interface/formas-pagamento.interface';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ContasReceberService } from 'src/app/services/contas-receber.service';
import { AtendimentoService } from 'src/app/services/atendimento.service';
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

  constructor(
    private fb: FormBuilder,
    private servicosService: ServicosService,
    private contasReceberService: ContasReceberService,
    private parcelasService: ParcelasService
  ) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group(this.model);
  }

  abrirFormasPagamento(pagamentos: Pagamentos) {
    this.idAtendimento = pagamentos.idAtendimento;
    this.valor = pagamentos.valor;
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

    const parcelas: ParcelasModel = {
      idContasReceber: contaReceber.idContasReceber!,
      idFormasPagamento: this.formaSelecionada.idFormasDePagamento,
      valorParcela: input.valor,
      dataPgto: new Date(),
    };

    servico.status = 4;

    contaReceber.valorPago! += this.valor;
    if (contaReceber.valor === contaReceber.valorPago) {
      contaReceber.pago = true;
    }

    const res = await Promise.all([
      this.contasReceberService.salvar(contaReceber),
      this.servicosService.salvar(servico),
    ]);
  }
}
