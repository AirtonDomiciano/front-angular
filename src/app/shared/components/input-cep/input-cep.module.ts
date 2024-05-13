import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { InputCepComponent } from './input-cep.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [InputCepComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [InputCepComponent],
})
export class InputCepModule {}
