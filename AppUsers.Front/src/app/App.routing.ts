import { Routes, RouterModule } from '@angular/router';

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'user',
    pathMatch: 'full'
  },
  {
    path: 'user',
    loadChildren: () => import('../app/components/home/user/user.module').then(x => x.UserModule)
  },
  {
    path: 'new-user',
    loadChildren: () => import('../app/components/home/user/new-user/new-user.module').then(x => x.NewUserModule)
  },
];
