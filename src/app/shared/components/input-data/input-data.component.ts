import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-data',
  templateUrl: './input-data.component.html',
  styleUrls: ['./input-data.component.scss'],
})
export class InputDataComponent {
  @Input() form!: FormGroup;
  @Input() id: string = '';
  @Input() frmName: string = '';
  @Input() frmClass: string = 'form-control rounded-pill';
  @Input() frmPlaceholder: string = 'Data';

  public date!: Date;
}
