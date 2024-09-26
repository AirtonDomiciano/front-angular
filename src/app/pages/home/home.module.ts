import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { HomeApiRoutingModule } from './home-routing.module';
import { CommonModule } from '@angular/common';
import { GraficoModule } from 'src/app/shared/components/grafico/grafico.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    HomeApiRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    GraficoModule,
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
