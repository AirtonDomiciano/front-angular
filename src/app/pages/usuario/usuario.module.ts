import { NgModule } from '@angular/core';
import { UsuarioComponent } from './usuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputModule } from 'src/app/shared/components/input/input.module';
import { RouterModule } from '@angular/router';
import { InputCepModule } from 'src/app/shared/components/input-cep/input-cep.module';
import { CommonModule } from '@angular/common';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { InputSenhaModule } from 'src/app/shared/components/input-senha/input-senha.module';
import { SelectCidadesModule } from 'src/app/shared/components/select-cidades/select-cidades.module';
import { BotaoVoltarModule } from 'src/app/shared/components/botao-voltar/botao-voltar.module';

@NgModule({
  declarations: [UsuarioComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    InputModule,
    InputSenhaModule,
    UsuarioRoutingModule,
    InputCepModule,
    SelectCidadesModule,
    BotaoVoltarModule,
  ],
  exports: [UsuarioComponent],
})
export class UsuarioModule {}
