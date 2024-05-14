import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() form!: UntypedFormGroup;
  @Input() frmType: string = 'text';
  @Input() frmClass = 'form-control rounded-pill mt-2';
  @Input() id = '';
  @Input() frmName = '';
  @Input() placeholder = '';

  public isFrmError = false;

  constructor() {}

  ngOnInit(): void {
    this.frmError();
  }

  frmError() {
    if (this.form.controls[this.frmName].invalid) {
      this.isFrmError = true;
    }
  }
}
