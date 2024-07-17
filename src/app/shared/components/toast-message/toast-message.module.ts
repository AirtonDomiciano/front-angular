import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastMessageComponent } from './toast-message.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [ToastMessageComponent],
  imports: [CommonModule, ToastModule],
  exports: [ToastMessageComponent],
  providers: [MessageService],
})
export class ToastMessageModule {}
