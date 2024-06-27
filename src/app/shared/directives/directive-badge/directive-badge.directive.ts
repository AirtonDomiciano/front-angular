import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appDirectiveBadge]',
})
export class DirectiveBadgeDirective implements OnInit {
  @Input() status!: number;

  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {
    this.setarDirectiveBadge();
  }

  setarDirectiveBadge() {
    switch (this.status) {
      case 0:
        this.elRef.nativeElement.style.backgroundColor = '#dc3545';
        this.elRef.nativeElement.innerHTML = 'Cancelado';
        break;

      case 1:
        this.elRef.nativeElement.style.backgroundColor = '#ffc107';
        this.elRef.nativeElement.innerHTML = 'Em espera';
        break;
      case 2:
        this.elRef.nativeElement.style.backgroundColor = '#007bff';
        this.elRef.nativeElement.innerHTML = 'Em andamento';
        break;
      case 3:
        this.elRef.nativeElement.style.backgroundColor = '#28a745';
        this.elRef.nativeElement.innerHTML = 'Concluído';
        break;
    }
  }
}
