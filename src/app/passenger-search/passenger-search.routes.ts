/**
 * Created by timo on 11.01.17.
 */
import { Routes, RouterModule } from '@angular/router';
import { FlightSearchComponent } from './passenger-search/passenger-search.component';
import { PassengerSearchComponent } from './passenger-search.component';
import { PassengerEditComponent } from './passenger-edit/passenger-edit.component';

const FLIGHT_SEARCH_ROUTES: Routes = [
  {
    path: 'flight-search',
    component: FlightSearchComponent
  },
  {
    path: 'passenger-search',
    component: PassengerSearchComponent
  },
  {
    path: 'passenger-edit/:id',
    component: PassengerEditComponent
  }
];

export const PassengerSearchRouterModule
  = RouterModule.forChild(FLIGHT_SEARCH_ROUTES);
