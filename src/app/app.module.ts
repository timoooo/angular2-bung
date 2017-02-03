import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {BASE_URL} from "./app.tokens";
import {PassengerSearchModule} from "./passenger-search/passenger-search.module";
import {AppRouterModule} from "./app.routes";
import {HomeComponent} from "./home/home.component";
import { OAuthModule } from 'angular-oauth2-oidc';


const BASE_URL_FOR_PRODUCTION = "http://www.angular.at/api/passenger";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PassengerSearchModule,
    AppRouterModule,
    OAuthModule.forRoot()
  ],
  declarations: [
    AppComponent,
    HomeComponent,

  ],
  providers: [
    // { provide: FlightService, useClass: FlightService }
    // FlightService
    { provide: BASE_URL,
      useValue: BASE_URL_FOR_PRODUCTION}
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
