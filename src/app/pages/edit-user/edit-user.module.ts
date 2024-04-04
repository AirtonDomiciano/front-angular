import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EditUserComponent } from './edit-user.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [EditUserComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  exports: [EditUserComponent],
})
export class EditUserModule {}
