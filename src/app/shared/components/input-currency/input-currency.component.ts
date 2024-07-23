import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-currency',
  templateUrl: './input-currency.component.html',
  styleUrls: ['./input-currency.component.scss'],
})
export class InputCurrencyComponent {
  @Output() emitterValorVerificado: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  @Input() form!: FormGroup;
  @Input() type: string = 'text';
  @Input() class = 'form-control rounded-pill';
  @Input() id = '';
  @Input() frmName: string = '';
  @Input() placeholder = '';
  @Input() valor!: number;

  public valorValido: boolean = true;

  verificaValor() {
    let valorInput = this.form.controls[this.frmName].value;

    if (valorInput > this.valor) {
      this.valorValido = false;
    } else {
      this.valorValido = true;
    }
    this.emitterValorVerificado.emit(this.valorValido);
  }
}
