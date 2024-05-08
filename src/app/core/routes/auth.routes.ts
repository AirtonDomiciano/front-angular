import { Routes } from '@angular/router';
import { AuthLayoutComponent } from '../components/auth-layout/auth-layout.component';

// auth.routes.ts
export const authRoutes: Routes = [
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        loadChildren: () =>
          import('src/app/pages/login/login.module').then((m) => m.LoginModule),
      },
      {
        path: 'cadastro',
        loadChildren: () =>
          import('src/app/pages/registro-usuario/registro-usuario.module').then(
            (m) => m.RegistroUsuarioModule
          ),
      },
      // { path: '**', redirectTo: 'login' },
    ],
  },
];
