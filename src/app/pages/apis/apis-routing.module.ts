import { Route, RouterModule, Routes } from '@angular/router';
import { ApisComponent } from './apis.component';
import { NgModule } from '@angular/core';

const routes: Routes = [{ path: '', component: ApisComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApisRoutingModule {}
