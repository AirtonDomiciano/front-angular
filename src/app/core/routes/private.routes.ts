import { Routes } from '@angular/router';
import BaseLayoutComponent from '../components/base-layout/base-layout.component';
import { AuthGuardService } from '../guards/auth-guard.service';

// private.routes.ts
export const privateRoutes: Routes = [
  {
    path: 'private',
    component: BaseLayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../../pages/home/home.module').then((m) => m.HomeModule),
        canActivate: [AuthGuardService],
      },
      //... other private routes...
    ],
  },
];
