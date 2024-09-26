import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraficoComponent } from './grafico.component';
import { ChartModule } from 'primeng/chart';

@NgModule({
  declarations: [GraficoComponent],
  imports: [CommonModule, ChartModule],
  exports: [GraficoComponent],
})
export class GraficoModule {}
