import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown-acoes',
  templateUrl: './dropdown-acoes.component.html',
  styleUrls: ['./dropdown-acoes.component.scss'],
})
export class DropdownAcoesComponent implements OnInit {
  @Output() emitterEditarAtendimento: EventEmitter<number> =
    new EventEmitter<number>();
  @Output() emitterCancelarServico: EventEmitter<number> =
    new EventEmitter<number>();
  @Output() emitterIniciarServico: EventEmitter<number> =
    new EventEmitter<number>();
  @Output() emitterFinalizarServico: EventEmitter<number> =
    new EventEmitter<number>();
  @Output() emitterRestaurarServico: EventEmitter<number> =
    new EventEmitter<number>();

  @Input() statusInput!: number;
  public status: number = 0;

  ngOnInit(): void {
    this.status = this.statusInput;
  }

  editarAtendimento() {
    this.emitterEditarAtendimento.emit();
  }

  cancelarServico() {
    this.emitterCancelarServico.emit();
  }

  iniciarServico() {
    this.emitterIniciarServico.emit();
  }

  finalizarServico() {
    this.emitterFinalizarServico.emit();
  }

  restaurarServico() {
    this.emitterRestaurarServico.emit();
  }
}
