import { NgModule } from '@angular/core';
import { ApiComponent } from '../api/api.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiRoutingModule } from './api-routing.module';

@NgModule({
  declarations: [ApiComponent],
  imports: [CommonModule, ReactiveFormsModule, ApiRoutingModule],
  exports: [ApiComponent],
})
export class ApiModule {}
