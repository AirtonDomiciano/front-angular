import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteComponent } from './cliente.component';
import { ClienteRoutingModule } from './cliente-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { InputModule } from 'src/app/shared/components/input/input.module';
import { InputCepModule } from 'src/app/shared/components/input-cep/input-cep.module';

@NgModule({
  declarations: [ClienteComponent],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    ReactiveFormsModule,
    InputModule,
    InputCepModule,
  ],
  exports: [ClienteComponent],
})
export class ClienteModule {}
