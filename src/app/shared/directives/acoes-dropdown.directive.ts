import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appDisable]',
})
export class AcoesDropdownDirective implements OnInit {
  @Input() appDisable: boolean = false;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.setDisabledState();
  }

  private setDisabledState(): void {
    this.el.nativeElement.disabled = this.appDisable;
    this.appDisable
      ? this.el.nativeElement.classList.add('disabled')
      : this.el.nativeElement.classList.remove('disabled');
  }
}
