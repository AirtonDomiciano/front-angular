import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CepPipe } from './cep.pipe';

@NgModule({
  declarations: [CepPipe],
  imports: [BrowserModule, RouterModule],
  exports: [CepPipe],
})
export class CepPipeModule {}
