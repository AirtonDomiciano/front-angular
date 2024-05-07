import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { InputCepComponent } from './input-cep.component';

@NgModule({
  declarations: [InputCepComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  exports: [InputCepComponent],
})
export class InputCepModule {}
