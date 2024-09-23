import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-currency',
  templateUrl: './input-currency.component.html',
  styleUrls: ['./input-currency.component.scss'],
})
export class InputCurrencyComponent implements OnInit {
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
  public isRequired: boolean = false;

  ngOnInit(): void {
    this.verificaCampoRequerido();
  }

  verificaValor() {
    const valorInput = this.form.controls[this.frmName].value;
    if (this.valor) {
      this.valorValido = valorInput <= this.valor;
      this.emitterValorVerificado.emit(this.valorValido);
    }
    if (valorInput === 0) {
      this.valorValido = false;
    } else {
      this.valorValido = true;
    }
  }

  verificaCampoRequerido() {
    this.isRequired = this.form.controls[this.frmName].hasValidator(
      Validators.required
    );
  }
}
