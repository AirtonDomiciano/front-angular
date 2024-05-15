import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntidadesComponent } from './entidades.component';
import { EntidadesRoutingModule } from './entidades-routing.module';

@NgModule({
  declarations: [EntidadesComponent],
  imports: [CommonModule, EntidadesRoutingModule],
  exports: [EntidadesComponent],
})
export class EntidadesModule {}
