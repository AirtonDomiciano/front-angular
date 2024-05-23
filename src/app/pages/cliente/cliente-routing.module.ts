import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteModule } from './cliente.module';
import { ClienteComponent } from './cliente.component';

const routes: Routes = [{ path: '', component: ClienteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteRoutingModule {}
