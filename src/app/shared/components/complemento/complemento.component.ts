import { Component, OnInit } from '@angular/core';
import FormaPagamento from 'src/app/shared/interface/formas-pagamento.interface';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ListaFormasPagamento } from './const/formas-pagamento.const';
import ComplementoModel from './model/complemento.model';
import { MovLctosService } from 'src/app/services/mov-lctos.service';
import { ToastMessageService } from '../../services/toast-message.service';
import MovLctosInterface from '../../interface/mov-lctos.interface';
import ComplementosInterface from '../../interface/complementos.interface';

@Component({
  selector: 'app-pagamento',
  templateUrl: './complemento.component.html',
  styleUrls: ['./complemento.component.scss'],
})
export class ComplementoComponent implements OnInit {
  public formGroup!: FormGroup;
  public model: ComplementoModel = new ComplementoModel();

  public complemento?: ComplementosInterface;
  public mostrar: boolean = false;
  public formasDePagamento = ListaFormasPagamento;
  public formaSelecionada?: FormaPagamento;
  public valorValido: boolean = false;

  constructor(
    private fb: FormBuilder,
    private movLctosService: MovLctosService,
    private toast: ToastMessageService
  ) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group(this.model);
  }

  async abrirComplemento(complemento: ComplementosInterface) {
    this.complemento = complemento;
    this.mostrar = true;
  }

  async onSubmit() {
    const valor = this.formGroup.controls['valor'].value;
    const movLcto: MovLctosInterface = {
      idFormasDePagamento: this.formaSelecionada!.idFormasDePagamento,
      valorPago: valor,
      pagamento: this.complemento?.pagamento!,
      recebimento: this.complemento?.recebimento!,
      data: new Date(),
    };

    const res = await this.movLctosService.salvarPagamento(
      this.complemento?.idAtendimento!,
      movLcto
    );

    if (res) {
      this.toast.mostrarSucesso('Pagamento Salvo!');
    } else {
      this.toast.mostrarErro('Pagamento Não Salvo!');
    }

    this.atualizarDados(valor);
  }

  emitterValorVerificado(event: boolean) {
    this.valorValido = event;
  }

  atualizarDados(valor: number) {
    delete this.formaSelecionada;

    this.complemento!.valorRestante -= valor;
    this.complemento!.valorRestante = parseFloat(
      this.complemento!.valorRestante.toFixed(2)
    );

    this.formGroup.controls['valor'].setValue(0);

    if (this.complemento?.valorRestante === 0) {
      this.mostrar = false;
    }
  }
}
