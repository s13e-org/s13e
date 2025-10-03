import { Routes } from '@angular/router';
import { Home } from './ui/pages/home/home';
import { environment } from '@environments/environment';
import { Styleguide } from './ui/styleguide/styleguide';
import { ChatLayout } from './ui/templates/chat-layout/chat-layout';
import { Chat } from './ui/pages/chat/chat';

export const routes: Routes = [
  ...(environment.production ? [] : [
      { path: 'styleguide', component: Styleguide }
    ]),
    { path: '', component: Home },
    // { path: 'chat-layout', component: ChatLayout},
    { path: 'chat', component:Chat},
];
