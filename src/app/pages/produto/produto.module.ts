import { NgModule } from '@angular/core';
import { ProdutoComponent } from './produto.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputModule } from 'src/app/shared/components/input/input.module';
import { CommonModule } from '@angular/common';
import { ProdutoRoutingModule } from './produto-routing.module';

@NgModule({
  declarations: [ProdutoComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputModule,
    ProdutoRoutingModule,
  ],
  exports: [ProdutoComponent],
})
export class ProdutoModule {}
