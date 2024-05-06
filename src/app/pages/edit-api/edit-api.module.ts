import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditApiComponent } from './edit-api.component';
import { EditApiRoutingModule } from './edit-api-routing.module';

@NgModule({
  declarations: [EditApiComponent],
  imports: [
    EditApiRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [EditApiComponent],
})
export class EditApiModule {}
