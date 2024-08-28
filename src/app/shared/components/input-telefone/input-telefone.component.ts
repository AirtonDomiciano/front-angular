import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-telefone',
  templateUrl: './input-telefone.component.html',
  styleUrls: ['./input-telefone.component.scss'],
})
export class InputTelefoneComponent implements OnInit {
  @Input() form!: FormGroup;
  @Input() type: string = 'text';
  @Input() class = 'form-control rounded-pill';
  @Input() id = '';
  @Input() frmName = '';
  @Input() placeholder = '';

  public isRequired: boolean = false;

  ngOnInit(): void {
    this.verificaCampoObrigatorio();
  }

  verificaCampoObrigatorio() {
    this.isRequired = this.form.controls[this.frmName].hasValidator(
      Validators.required
    );
  }
}
