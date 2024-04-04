import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EditProductComponent } from './edit-product.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [EditProductComponent],
  imports: [BrowserModule, RouterModule, FormsModule, ReactiveFormsModule],
  exports: [EditProductComponent],
})
export class EditProductModule {}
