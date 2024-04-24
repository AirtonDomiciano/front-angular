import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditApiComponent } from './edit-api.component';

@NgModule({
  declarations: [EditApiComponent],
  imports: [BrowserModule, RouterModule, FormsModule, ReactiveFormsModule],
  exports: [EditApiComponent],
})
export class EditApiModule {}
