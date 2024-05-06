import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { HomeApiRoutingModule } from './home-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    HomeApiRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
