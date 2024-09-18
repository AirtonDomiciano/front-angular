import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { AnimaisComponent } from './animais.component';
import { AnimaisRoutingModule } from './animais-routing.module';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AnimaisComponent],
  imports: [
    CommonModule,
    AnimaisRoutingModule,
    TableModule,
    DatePipe,
    FormsModule,
  ],
  exports: [AnimaisComponent],
})
export class AnimaisModule {}
