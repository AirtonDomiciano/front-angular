import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DropdownAcoesComponent } from './dropdown-acoes.component';
import { AcoesDropdownDirective } from '../../directives/acoes-dropdown.directive';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [DropdownAcoesComponent, AcoesDropdownDirective],
  imports: [CommonModule, NgbDropdownModule],
  exports: [DropdownAcoesComponent],
})
export class DropdownAcoesModule {}
