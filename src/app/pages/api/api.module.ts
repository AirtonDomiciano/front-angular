import { NgModule } from '@angular/core';
import { ApiComponent } from '../api/api.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiRoutingModule } from './api-routing.module';
import { InputModule } from 'src/app/shared/components/input/input.module';

@NgModule({
  declarations: [ApiComponent],
  imports: [CommonModule, ReactiveFormsModule, ApiRoutingModule, InputModule],
  exports: [ApiComponent],
})
export class ApiModule {}
