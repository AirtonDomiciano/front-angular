import { Component, Input } from '@angular/core';
import { UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() form!: UntypedFormGroup;
  @Input() frmType: string = 'text';
  @Input() id: string = '';
  @Input() frmName: string = '';
  @Input() placeholder: string = '';
  @Input() frmClass: string = 'form-control rounded-pill';

  public isRequired: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.verificaCampoRequerido();
  }

  verificaCampoRequerido() {
    this.isRequired = this.form.controls[this.frmName].hasValidator(
      Validators.required
    );
  }
}
