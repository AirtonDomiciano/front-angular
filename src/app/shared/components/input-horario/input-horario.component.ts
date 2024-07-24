import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-horario',
  templateUrl: './input-horario.component.html',
  styleUrls: ['./input-horario.component.scss'],
})
export class InputHorarioComponent {
  @Input() form!: FormGroup;
  @Input() id: string = '';
  @Input() frmName: string = '';
  @Input() placeholder: string = 'Horário';
  @Input() frmClass: string = 'form-control rounded-pill';
  public horario!: Date;
}
