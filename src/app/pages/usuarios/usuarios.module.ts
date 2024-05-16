import { NgModule } from '@angular/core';
import { UsuariosComponent } from './usuarios.component';
import { CepPipeModule } from 'src/app/shared/pipes/cep-pipe.module';
import { CommonModule } from '@angular/common';
import { UsuariosRoutingModule } from './usuarios-routing.module';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [UsuariosComponent],
  imports: [CommonModule, CepPipeModule, UsuariosRoutingModule, TableModule],
  exports: [UsuariosComponent],
})
export class UsuariosModule {}
