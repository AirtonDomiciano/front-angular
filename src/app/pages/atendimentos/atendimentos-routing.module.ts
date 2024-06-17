import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtendimentosComponent } from './atendimentos.component';

const routes: Routes = [{ path: '', component: AtendimentosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtendimentosRoutingModule {}
