import { Route } from '@angular/router';
import { RemoteEntry } from './entry';
import { JsonFormsComponent } from '../json-forms/json-forms.component';
import { NxWelcome } from './nx-welcome';

export const remoteRoutes: Route[] = [
  {
    path: '',
    component: RemoteEntry,
    children: [
      { path: '', component: NxWelcome },
      { path: 'json-forms', component: JsonFormsComponent },
    ],
  },
];
