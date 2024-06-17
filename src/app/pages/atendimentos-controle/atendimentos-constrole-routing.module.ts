import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtendimentosControleComponent } from './atendimentos-controle.component';

const routes: Routes = [{ path: '', component: AtendimentosControleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtendimentosControleRoutingModule {}
