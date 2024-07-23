import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-data',
  templateUrl: './input-data.component.html',
  styleUrls: ['./input-data.component.scss'],
})
export class InputDataComponent implements OnInit {
  @Input() form!: UntypedFormGroup;
  @Input() frmType: string = 'date';
  @Input() id: string = '';
  @Input() frmName: string = '';
  @Input() frmClass: string = 'form-control rounded-pill';

  constructor() {}

  ngOnInit(): void {}
}
