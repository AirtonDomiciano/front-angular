import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-senha',
  templateUrl: './input-senha.component.html',
  styleUrls: ['./input-senha.component.scss'],
})
export class InputSenhaComponent implements OnInit {
  @Input() form!: FormGroup;
  @Input() type: string = 'text';
  @Input() class = 'form-control rounded-left mt-2';
  @Input() id = '';
  @Input() frmName = '';
  @Input() placeholder = '';

  ngOnInit(): void {}
}
