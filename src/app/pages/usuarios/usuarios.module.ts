import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UsuariosComponent } from './usuarios.component';
import { CepPipeModule } from 'src/app/shared/pipes/cep-pipe.module';

@NgModule({
  declarations: [UsuariosComponent],
  imports: [BrowserModule, CepPipeModule],
  exports: [UsuariosComponent],
})
export class UsuariosModule {}
