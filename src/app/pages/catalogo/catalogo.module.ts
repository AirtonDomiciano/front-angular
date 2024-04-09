import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { CatalogoComponent } from './catalogo.component';

@NgModule({
  declarations: [CatalogoComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  exports: [CatalogoComponent],
})
export class CatalogoModule {}
