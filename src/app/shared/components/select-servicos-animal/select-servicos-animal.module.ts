import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectServicosAnimalComponent } from './select-servicos-animal.component';
import { DropdownModule } from 'primeng/dropdown';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SelectServicosAnimalComponent],
  imports: [CommonModule, DropdownModule, ReactiveFormsModule],
  exports: [SelectServicosAnimalComponent],
})
export class SelectServicosAnimalModule {}
