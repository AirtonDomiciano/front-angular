import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DropdownClickInterface } from '../../interface/dropdown-click.interface';

export interface DropdownAcoesInterface {
  id: string;
  nome: string;
  icone?: string;
  disabled?: boolean;
  idx?: number;
}

@Component({
  selector: 'app-dropdown-acoes',
  templateUrl: './dropdown-acoes.component.html',
  styleUrls: ['./dropdown-acoes.component.scss'],
})
export class DropdownAcoesComponent implements OnInit {
  @Output() emitterDropDownClick: EventEmitter<DropdownClickInterface> =
    new EventEmitter<DropdownClickInterface>();

  @Input() statusInput!: number;
  @Input() botoesDropDown: Array<DropdownAcoesInterface> = [];
  @Input() idxList = 0;

  public status: number = 0;

  ngOnInit(): void {
    this.status = this.statusInput;
  }

  btnEmitter(obj: DropdownAcoesInterface) {
    this.emitterDropDownClick.emit({ idx: this.idxList, id: obj.id });
  }
}
