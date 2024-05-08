import { NgModule } from '@angular/core';
import { UsuariosComponent } from './usuarios.component';
import { CepPipeModule } from 'src/app/shared/pipes/cep-pipe.module';
import { CommonModule } from '@angular/common';
import { UsuariosRoutingModule } from './usuarios-routing.module';

@NgModule({
  declarations: [UsuariosComponent],
  imports: [CommonModule, CepPipeModule, UsuariosRoutingModule],
  exports: [UsuariosComponent],
})
export class UsuariosModule {}
