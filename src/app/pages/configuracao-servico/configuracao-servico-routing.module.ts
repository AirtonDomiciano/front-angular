import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfiguracaoServicoComponent } from './configuracao-servico.component';

const routes: Routes = [{ path: '', component: ConfiguracaoServicoComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfiguracaoServicoRoutingModule {}
