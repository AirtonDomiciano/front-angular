import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss'],
})
export class InputNumberComponent {
  @Input() form!: FormGroup;
  @Input() type: string = 'number';
  @Input() class = 'form-control rounded-pill mt-2';
  @Input() id = '';
  @Input() frmName = '';
  @Input() placeholder = '';
}
