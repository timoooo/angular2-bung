/**
 * Created by timo on 30.11.16.
 */

import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";
import {CommonModule} from "@angular/common";
import {PassengerSearchComponent} from "./passenger-search.component";
import {PassengerCardComponent} from "./passenger-card.component";
import {PassengerService} from "./services/passenger-service";
import  {PassengerSearchRouterModule} from "./passenger-search.routes";
import {PassengerEditComponent} from "./passenger-edit/passenger-edit.component";
import {FlightSearchComponent} from "./passenger-search/passenger-search.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    PassengerSearchRouterModule
  ],
  declarations: [
    PassengerSearchComponent,
    PassengerCardComponent,
    PassengerEditComponent,
    FlightSearchComponent//, FlightCardComponent
  ],
  providers: [
    PassengerService
  ],
  exports: [
    PassengerSearchComponent
  ]
})
export class PassengerSearchModule {

}
