import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UsersComponent } from './users.component';
import { CepPipeModule } from 'src/app/shared/pipes/cep-pipe.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UsersComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, CepPipeModule],
  exports: [UsersComponent],
})
export class UsersModule {}
