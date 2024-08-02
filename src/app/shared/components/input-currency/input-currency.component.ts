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
  @Input() valor: number = 0;

  public valorValido: boolean = false;

  verificaValor() {
    let valorInput = this.form.controls[this.frmName].value;
    this.valorValido = valorInput <= this.valor;
    this.emitterValorVerificado.emit(this.valorValido);
  }
}
