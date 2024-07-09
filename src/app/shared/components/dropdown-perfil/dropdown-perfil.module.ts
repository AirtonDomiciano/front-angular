import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownPerfilComponent } from './dropdown-perfil.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [DropdownPerfilComponent],
  imports: [CommonModule, NgbDropdownModule],
  exports: [DropdownPerfilComponent],
})
export class DropdownPerfilModule {}
