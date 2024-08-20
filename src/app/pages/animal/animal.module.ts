import { NgModule } from '@angular/core';
import { AnimalComponent } from './animal.component';
import { CommonModule, DatePipe } from '@angular/common';
import { AnimalRoutingModule } from './animal-routing.module';
import { TableModule } from 'primeng/table';
import { InputModule } from 'src/app/shared/components/input/input.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectClientesModule } from 'src/app/shared/components/select-clientes/select-clientes.module';
import { BotaoVoltarModule } from 'src/app/shared/components/botao-voltar/botao-voltar.module';

@NgModule({
  declarations: [AnimalComponent],
  imports: [
    CommonModule,
    AnimalRoutingModule,
    TableModule,
    DatePipe,
    InputModule,
    RouterModule,
    ReactiveFormsModule,
    SelectClientesModule,
    BotaoVoltarModule,
  ],
  exports: [AnimalComponent],
})
export class AnimalModule {}
