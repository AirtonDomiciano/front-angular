import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { CadastroComponent } from './cadastro.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CadastroComponent],
  imports: [BrowserModule, ReactiveFormsModule, RouterModule],
  exports: [CadastroComponent],
})
export class CadastroModule {}
