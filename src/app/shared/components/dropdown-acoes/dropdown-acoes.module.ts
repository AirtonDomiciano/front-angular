import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DropdownAcoesComponent } from './dropdown-acoes.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { AcoesDropdownModule } from '../../directives/acoes-dropdown.module';
import { ListboxModule } from 'primeng/listbox';

@NgModule({
  declarations: [DropdownAcoesComponent],
  imports: [
    CommonModule,
    NgbDropdownModule,
    AcoesDropdownModule,
    ListboxModule,
  ],
  exports: [DropdownAcoesComponent],
})
export class DropdownAcoesModule {}
