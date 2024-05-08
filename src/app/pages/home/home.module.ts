import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { HomeApiRoutingModule } from './home-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HomeComponent],
  imports: [HomeApiRoutingModule, ReactiveFormsModule, CommonModule],
  exports: [HomeComponent],
})
export class HomeModule {}
