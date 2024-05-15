import { NgModule } from '@angular/core';
import { ComprasComponent } from './compras.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ComprasRoutingModule } from './compras-routing.module';

@NgModule({
  declarations: [ComprasComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    ComprasRoutingModule,
  ],
  exports: [ComprasComponent],
})
export class ComprasModule {}
