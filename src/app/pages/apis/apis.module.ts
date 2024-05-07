import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApisComponent } from './apis.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ApisComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  exports: [ApisComponent],
})
export class ApisModule {}
