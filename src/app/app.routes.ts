import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';

const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }

];

export const AppRouterModule
  = RouterModule.forRoot(APP_ROUTES);
