import { Route } from '@angular/router';
import { RemoteEntry } from './entry';
import { AboutMeComponent } from '../about-me/about-me.component';
import { NxWelcome } from '../nx-welcome';

export const remoteRoutes: Route[] = [
  {
    path: '',
    component: RemoteEntry,
    children: [
      { path: '', component: NxWelcome },
      { path: 'about-me', component: AboutMeComponent },
    ],
  },
];

