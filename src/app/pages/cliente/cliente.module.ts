import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteComponent } from './cliente.component';
import { ClienteRoutingModule } from './cliente-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { InputModule } from 'src/app/shared/components/input/input.module';

@NgModule({
  declarations: [ClienteComponent],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    ReactiveFormsModule,
    InputModule,
  ],
  exports: [ClienteComponent],
})
export class ClienteModule {}
