import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteComponent } from './cliente.component';
import { ClienteRoutingModule } from './cliente-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { InputModule } from 'src/app/shared/components/input/input.module';
import { InputCepModule } from 'src/app/shared/components/input-cep/input-cep.module';
import { InputTelefoneModule } from 'src/app/shared/components/input-telefone/input-telefone.module';
import { InputCpfCnpjModule } from 'src/app/shared/components/input-cpf-cnpj/input-cpf-cnpj.module';
import { SelectUfsModule } from 'src/app/shared/components/select-ufs/select-ufs.module';
import { SelectCidadesModule } from 'src/app/shared/components/select-cidades/select-cidades.module';
import { BotaoVoltarModule } from 'src/app/shared/components/botao-voltar/botao-voltar.module';

@NgModule({
  declarations: [ClienteComponent],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    ReactiveFormsModule,
    InputModule,
    InputCepModule,
    InputTelefoneModule,
    InputCpfCnpjModule,
    SelectUfsModule,
    SelectCidadesModule,
    BotaoVoltarModule,
  ],
  exports: [ClienteComponent],
})
export class ClienteModule {}
