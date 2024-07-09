import { Directive, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[appDisable]',
})
export class AcoesDropdownDirective implements OnInit {
  @Input() status!: number;
  @Output() emitterArrayDisabled: EventEmitter<Array<boolean>> =
    new EventEmitter<Array<boolean>>();

  ngOnInit(): void {
    this.setDisabledState();
  }

  private setDisabledState(): void {
    this.emitterArrayDisabled.emit();
  }
}
