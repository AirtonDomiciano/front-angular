import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistroUsuarioComponent } from './registro-usuario.component';
import { RouterModule } from '@angular/router';
import { InputModule } from 'src/app/shared/components/input/input.module';
import { RegistroUsuarioRoutingModule } from './registro-usuario-routing.module';
import { InputSenhaModule } from 'src/app/shared/components/input-senha/input-senha.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [RegistroUsuarioComponent],
  imports: [
    RegistroUsuarioRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    InputModule,
    InputSenhaModule,
    CommonModule,
  ],
  exports: [RegistroUsuarioComponent],
})
export class RegistroUsuarioModule {}
