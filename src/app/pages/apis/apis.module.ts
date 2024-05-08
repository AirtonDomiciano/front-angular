import { NgModule } from '@angular/core';
import { ApisComponent } from './apis.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApisRoutingModule } from './apis-routing.module';

@NgModule({
  declarations: [ApisComponent],
  imports: [CommonModule, ApisRoutingModule],
  exports: [ApisComponent],
})
export class ApisModule {}
