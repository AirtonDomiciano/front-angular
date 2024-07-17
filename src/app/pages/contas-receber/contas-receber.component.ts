import { Component, OnInit, ViewChild } from '@angular/core';
import { ContasReceberService } from 'src/app/services/contas-receber.service';
import { ContasReceber } from 'src/app/shared/interface/contas-receber';
import { PagamentoComponent } from '../pagamento/pagamento.component';

@Component({
  selector: 'app-contas-receber',
  templateUrl: './contas-receber.component.html',
  styleUrls: ['./contas-receber.component.scss'],
})
export class ContasReceberComponent implements OnInit {
  @ViewChild('pagamento') pagamentoComponent!: PagamentoComponent;

  constructor(private contasReceberService: ContasReceberService) {}
  public lista!: ContasReceber[];

  async ngOnInit(): Promise<void> {
    await this.inicializarListaContas();
  }

  async inicializarListaContas() {
    this.lista = await this.contasReceberService.buscarContasReceber();
  }

  emitterDropDownClick($event: any) {
    switch ($event.id) {
      case 'id-pagar':
        this.mostrarPagamento($event.idx);
        break;
      case 'id-pagar-parcela':
        break;
    }
  }

  mostrarPagamento(idx: number) {
    const { idAtendimento, valor } = this.lista[idx];
    this.pagamentoComponent.abrirFormasPagamento({ idAtendimento, valor });
  }
}
