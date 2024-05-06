import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { CadastroComponent } from './cadastro.component';
import { RouterModule } from '@angular/router';
import { InputModule } from 'src/app/shared/components/input/input.module';
import { CoreModule } from 'src/app/core/core.module';
import { CadastroRoutingModule } from './cadastro-routing.module';

@NgModule({
  declarations: [CadastroComponent],
  imports: [
    CadastroRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    InputModule,
  ],
  exports: [CadastroComponent],
})
export class CadastroModule {}
