import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcoesDropdownDirective } from './acoes-dropdown.directive';

@NgModule({
  declarations: [AcoesDropdownDirective],
  imports: [CommonModule],
  exports: [AcoesDropdownDirective],
})
export class AcoesDropdownModule {}
