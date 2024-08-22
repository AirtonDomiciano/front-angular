import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-cpf-cnpj',
  templateUrl: './input-cpf-cnpj.component.html',
  styleUrls: ['./input-cpf-cnpj.component.scss'],
})
export class InputCpfCnpjComponent implements OnInit {
  @Input() form!: FormGroup;
  @Input() type: string = 'text';
  @Input() class = 'form-control rounded-pill';
  @Input() id = '';
  @Input() frmName = '';
  @Input() placeholder = '';

  public isRequired: boolean = false;

  ngOnInit(): void {
    this.verificaCampoRequerido();
  }

  verificaCampoRequerido() {
    this.isRequired = this.form.controls[this.frmName].hasValidator(
      Validators.required
    );
  }
}
