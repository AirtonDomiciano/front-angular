import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-horario',
  templateUrl: './input-horario.component.html',
  styleUrls: ['./input-horario.component.scss'],
})
export class InputHorarioComponent implements OnInit {
  @Input() form!: FormGroup;
  @Input() id: string = '';
  @Input() frmName: string = '';
  @Input() frmPlaceholder: string = 'Horário';
  @Input() frmClass: string = 'form-control rounded-pill';

  public horario!: Date;
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
