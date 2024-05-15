import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent } from './usuario.component';
import { ActivatedRoute } from '@angular/router';

const routes: Routes = [
  { path: '', component: UsuarioComponent },
  { path: ':id', component: UsuarioComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioRoutingModule {
  public id = Number(this.route.snapshot.paramMap.get('id'));

  constructor(private route: ActivatedRoute) {}
}
