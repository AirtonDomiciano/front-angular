import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ViewOrderComponent } from './view-order.component';

@NgModule({
  declarations: [ViewOrderComponent],
  imports: [BrowserModule, RouterModule],
  exports: [ViewOrderComponent],
})
export class ViewOrderModule {}
