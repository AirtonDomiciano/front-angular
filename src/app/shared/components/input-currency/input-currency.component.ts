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
    let valorInput = this.form.controls[this.frmName].value;
    this.valorValido = valorInput <= this.valor && valorInput !== 0;
    this.emitterValorVerificado.emit(this.valorValido);
  }

  verificaCampoRequerido() {
    this.isRequired = this.form.controls[this.frmName].hasValidator(
      Validators.required
    );
  }
}
