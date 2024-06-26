import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { ApiComponent } from './api.component';

const routes: Routes = [
  { path: '', component: ApiComponent },
  { path: ':id', component: ApiComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApiRoutingModule {}
