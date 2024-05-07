import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistroUsuarioComponent } from './registro-usuario.component';
import { RouterModule } from '@angular/router';
import { InputModule } from 'src/app/shared/components/input/input.module';
import { RegistroUsuarioRoutingModule } from './registro-usuario-routing.module';

@NgModule({
  declarations: [RegistroUsuarioComponent],
  imports: [
    RegistroUsuarioRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    InputModule,
  ],
  exports: [RegistroUsuarioComponent],
})
export class RegistroUsuarioModule {}
