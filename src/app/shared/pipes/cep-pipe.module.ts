import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CepPipe } from './cep.pipe';
import { CoreModule } from 'src/app/core/core.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [CepPipe],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [CepPipe],
})
export class CepPipeModule {}
