import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  exports: [HomeComponent],
})
export class HomeModule {}
