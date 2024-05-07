import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProdutoComponent } from './produto.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputModule } from 'src/app/shared/components/input/input.module';

@NgModule({
  declarations: [ProdutoComponent],
  imports: [BrowserModule, ReactiveFormsModule, InputModule],
  exports: [ProdutoComponent],
})
export class ProdutoModule {}
