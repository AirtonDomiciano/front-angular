import { NgModule } from '@angular/core';
import { ApisComponent } from './apis.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApisRoutingModule } from './apis-routing.module';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [ApisComponent],
  imports: [CommonModule, ApisRoutingModule, TableModule],
  exports: [ApisComponent],
})
export class ApisModule {}
