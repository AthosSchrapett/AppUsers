import { Routes, RouterModule } from '@angular/router';

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'user',
    pathMatch: 'full'
  },
  {
    path: 'user',
    loadChildren: () => import('../app/components/home/home.module').then(x => x.HomeModule)
  },
];
