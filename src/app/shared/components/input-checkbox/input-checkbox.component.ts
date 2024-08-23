import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'input-checkbox',
  templateUrl: './input-checkbox.component.html',
  styleUrls: ['./input-checkbox.component.scss'],
})
export class InputCheckboxComponent {
  @Input() form!: FormGroup;
  @Input() frmType: string = 'checkbox';
  @Input() frmClass: string = 'form-check-input px-3 py-3';
  @Input() frmName: string = '';

  public checked!: boolean;
}
