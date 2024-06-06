import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SelectUfsComponent } from './select-ufs.component';

@NgModule({
  declarations: [SelectUfsComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [SelectUfsComponent],
})
export class SelectUfsModule {}
