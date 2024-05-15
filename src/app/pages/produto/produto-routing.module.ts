import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { ProdutoComponent } from './produto.component';

const routes: Routes = [
  { path: '', component: ProdutoComponent },
  { path: ':id', component: ProdutoComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutoRoutingModule {
  public id = Number(this.route.snapshot.paramMap.get('id'));
  constructor(private route: ActivatedRoute) {}
}
