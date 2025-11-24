import { NxWelcome } from './nx-welcome';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    component: NxWelcome,
  },
  {
    path: 'portfolio',
    loadChildren: () =>
      import('portfolio/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'playground',
    loadChildren: () =>
      import('play-ground/Routes').then((m) => m.remoteRoutes),
  },
];
