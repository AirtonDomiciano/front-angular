import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { InputNumberComponent } from './input-number.component';

@NgModule({
  declarations: [InputNumberComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  exports: [InputNumberComponent],
})
export class InputNumberModule {}
