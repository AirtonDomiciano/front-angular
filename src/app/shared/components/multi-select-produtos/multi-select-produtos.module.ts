import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiSelectProdutosComponent } from './multi-select-produtos.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [MultiSelectProdutosComponent],
  imports: [
    CommonModule,
    MultiSelectModule,
    ReactiveFormsModule,
    FormsModule,
    DropdownModule,
  ],
  exports: [MultiSelectProdutosComponent],
})
export class MultiSelectProdutosModule {}
