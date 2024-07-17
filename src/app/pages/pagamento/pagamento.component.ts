import { Component, OnInit } from '@angular/core';
import FormaPagamento from 'src/app/shared/interface/formas-pagamento.interface';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ContasReceberService } from 'src/app/services/contas-receber.service';
import { AtendimentoService } from 'src/app/services/atendimento.service';
import { ServicosService } from 'src/app/services/servicos.service';
import ContasReceberInterface from 'src/app/shared/interface/contas-receber.interface';
import { ListaFormasPagamento } from './const/formas-pagamento.const';

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
export class PagamentoComponent {
  public idAtendimento: number = 0;
  public mostrar: boolean = false;
  public valor: number = 0;
  public formasDePagamento = ListaFormasPagamento;
  public formaSelecionada: FormaPagamento = {
    idFormasDePagamento: 0,
    nomeFormaPagamento: '',
  };
  public parcelas: number[] = [1, 2, 3, 4, 5, 6];
  public qtdParcelas: number | undefined;

  constructor(
    private contasReceberService: ContasReceberService,
    private atendimentoService: AtendimentoService,
    private servicosService: ServicosService
  ) {}

  abrirFormasPagamento(pagamentos: Pagamentos) {
    this.idAtendimento = pagamentos.idAtendimento;
    this.valor = pagamentos.valor;
    this.mostrar = true;
  }

  // onClosed(): void {
  //   this.formaSelecionada = {
  //     idFormasDePagamento: 0,
  //     nomeFormaPagamento: '',
  //   };
  // }

  async onSubmit() {
    //   const atendimento = await this.atendimentoService.buscarAtendimentoPorId(
    //     this.idAtendimento
    //   );
    //   const servico = await this.servicosService.buscarPorIdAtendimento(
    //     this.idAtendimento
    //   );
    //   let contasReceber!: ContasReceberInterface;
    //   if (this.formaSelecionada.idFormasDePagamento === 5) {
    //     let dataVcto = new Date();
    //     dataVcto.setMonth(dataVcto.getMonth() + 1);
    //     contasReceber = {
    //       idClientes: servico.idClientes,
    //       valor: this.valor,
    //       pago: false,
    //       dataVcto: dataVcto,
    //       idAtendimento: this.idAtendimento,
    //       idFormasDePagamento: this.formaSelecionada.idFormasDePagamento,
    //     };
    //   }
    //   if (
    //     this.formaSelecionada.idFormasDePagamento === 1 &&
    //     this.qtdParcelas &&
    //     this.qtdParcelas !== 1
    //   ) {
    //     let dataVcto = new Date();
    //     dataVcto.setMonth(dataVcto.getMonth() + this.qtdParcelas!);
    //     const juros = this.valor * 0.02;
    //     contasReceber = {
    //       idClientes: servico.idClientes,
    //       valor: this.valor,
    //       juros: juros,
    //       pago: false,
    //       qtdParcelas: this.qtdParcelas,
    //       dataVcto: dataVcto,
    //       idAtendimento: this.idAtendimento,
    //       idFormasDePagamento: this.formaSelecionada.idFormasDePagamento,
    //     };
    //   }
    //   if (contasReceber) {
    //     const res = await this.contasReceberService.salvar(contasReceber);
    //     if (!res) {
    //       alert('Conta a receber não salva!');
    //     }
    //   }
    //   atendimento.idFormasDePagamento = this.formaSelecionada.idFormasDePagamento;
    //   servico.status = 4;
    //   const res = await Promise.all([
    //     this.servicosService.salvar(servico),
    //     this.atendimentoService.salvar(atendimento),
    //   ]);
    //   if (res) {
    //     alert('Deu boa');
    //   }
    //   this.mostrar = false;
  }
}
