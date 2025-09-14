import { Routes } from '@angular/router';
import { Home } from './ui/pages/home/home';
import { environment } from '@environments/environment';
import { Styleguide } from './ui/styleguide/styleguide';

export const routes: Routes = [
    { path: '', component: Home },
    ...(environment.production ? [] : [
        { path: 'styleguide', component: Styleguide }
      ])
];
