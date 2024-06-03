import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SelectCidadesComponent } from './select-cidades.component';

@NgModule({
  declarations: [SelectCidadesComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [SelectCidadesComponent],
})
export class SelectCidadesModule {}
