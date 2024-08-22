import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-data',
  templateUrl: './input-data.component.html',
  styleUrls: ['./input-data.component.scss'],
})
export class InputDataComponent implements OnInit {
  @Input() form!: FormGroup;
  @Input() id: string = '';
  @Input() frmName: string = '';
  @Input() frmClass: string = 'form-control rounded-pill';
  @Input() frmPlaceholder: string = 'Data';

  public date!: Date;
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
