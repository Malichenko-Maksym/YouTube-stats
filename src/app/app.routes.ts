import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'channels',
    loadChildren: () => import('./main/main.module').then((m) => m.MainModule),
  },
];
