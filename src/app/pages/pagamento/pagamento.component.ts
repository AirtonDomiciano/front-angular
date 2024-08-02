import { Component, OnInit } from '@angular/core';
import FormaPagamento from 'src/app/shared/interface/formas-pagamento.interface';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ContasReceberService } from 'src/app/services/contas-receber.service';
import { ListaFormasPagamento } from './const/formas-pagamento.const';
import PagamentoModel from './model/pagamento.model';
import { ToastMessageService } from 'src/app/shared/services/toast-message.service';

export interface Pagamentos {
  idAtendimento?: number;
  valorRestante: number;
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
  public formasSelecionadas: FormaPagamento[] = [];
  public valorValido: boolean = true;

  constructor(
    private fb: FormBuilder,
    private contasReceberService: ContasReceberService,
    private toast: ToastMessageService
  ) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group(this.model);
  }

  async abrirFormasPagamento(pagamentos: Pagamentos) {
    this.idAtendimento = pagamentos.idAtendimento!;
    this.valor = pagamentos.valorRestante;
    this.mostrar = true;
  }

  async onSubmit() {
    const input: PagamentoModel = this.formGroup.value;
    // const obj: SalvarPagamentoInterface = {
    //   valor: input.valor,
    //   formaPagamento: this.formaSelecionada,
    // };

    // const res = await this.contasReceberService.salvarPagamento(
    //   this.idAtendimento,
    //   obj
    // );

    this.mostrar = false;

    // if (res) {
    //   this.toast.mostrarSucesso('Pagamento efetuado com sucesso!');
    //   return;
    // }
    // this.toast.mostrarErro('Erro ao tentar pagar!');
  }

  emitterValorVerificado(event: boolean) {
    this.valorValido = event;
  }

  mostra() {
    console.log(this.formasSelecionadas);
  }
}
