import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-cpf-cnpj',
  templateUrl: './input-cpf-cnpj.component.html',
  styleUrls: ['./input-cpf-cnpj.component.scss'],
})
export class InputCpfCnpjComponent implements OnInit {
  @Input() form!: FormGroup;
  @Input() type: string = 'text';
  @Input() class = 'form-control rounded-pill mt-2';
  @Input() id = '';
  @Input() frmName = '';
  @Input() placeholder = '';

  ngOnInit(): void {}
}
