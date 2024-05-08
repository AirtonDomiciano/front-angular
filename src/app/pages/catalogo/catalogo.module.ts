import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CatalogoComponent } from './catalogo.component';
import { CommonModule } from '@angular/common';
import { CatalogoRoutingModule } from './catalogo-routing.module';

@NgModule({
  declarations: [CatalogoComponent],
  imports: [CommonModule, ReactiveFormsModule, CatalogoRoutingModule],
  exports: [CatalogoComponent],
})
export class CatalogoModule {}
