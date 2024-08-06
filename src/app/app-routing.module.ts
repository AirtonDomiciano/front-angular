import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authRoutes } from './core/routes/auth.routes';
import { privateRoutes } from './core/routes/private.routes';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full',
  },
  {
    path: '',
    redirectTo: 'auth/cadastro',
    pathMatch: 'full',
  },
  ...authRoutes,
  ...privateRoutes,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
