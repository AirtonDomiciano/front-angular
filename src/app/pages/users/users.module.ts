import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UsersComponent } from './users.component';
import { RouterModule } from '@angular/router';
import { CepPipeModule } from 'src/app/shared/pipes/cep-pipe.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UsersComponent],
  imports: [BrowserModule, RouterModule, CepPipeModule, ReactiveFormsModule],
  exports: [UsersComponent],
})
export class UsersModule {}
