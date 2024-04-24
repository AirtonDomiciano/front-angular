import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApiComponent } from '../api/api.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ApiComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  exports: [ApiComponent],
})
export class ApiModule {}
