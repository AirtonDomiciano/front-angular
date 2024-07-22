import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import Pagamento from './model/pagamento.model';
import { AtendimentoService } from 'src/app/services/atendimento.service';
import { ActivatedRoute } from '@angular/router';
import { ListaFormasPagamento } from './const/formas-pagamento.const';
import { UtilsService } from 'src/app/shared/utils/utils.service';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.scss'],
})
export class PagamentoComponent implements OnInit {
  public formGroup!: FormGroup;
  public model: Pagamento = new Pagamento();
  public valor: number = 0;
  public id = Number(this.route.snapshot.paramMap.get('id'));
  public formasDePagamento = ListaFormasPagamento;
  public formaSelecionada = {};

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private atendimentoService: AtendimentoService,
    private utils: UtilsService
  ) {
    this.formGroup = this.fb.group(this.model);
  }

  ngOnInit(): void {
    this.setarCamposObrigatorios();
    this.buscarAtendimento();
  }
  onSubmit() {}

  setarCamposObrigatorios() {
    this.utils.setarCamposRequeridos(['id'], this.formGroup);
  }

  async buscarAtendimento() {
    const atendimento = await this.atendimentoService.buscarAtendimentoPorId(
      this.id
    );

    this.valor = atendimento.valor!;
  }
}
