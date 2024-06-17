import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KitProdutosComponent } from './kit-produtos.component';

const routes: Routes = [{ path: '', component: KitProdutosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KitProdutosRoutingModule {}
