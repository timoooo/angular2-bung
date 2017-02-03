/**
 * Created by timo on 30.11.16.
 */


import {NgModule} from "@angular/core";
import {CommonModule} from '@angular/common';
import {PassengerPipe} from "./pipes/passenger.pipe";
import {NameValidator} from "./validator/name.validator";
import {AsyncNameValidator} from "./validator/async-name.validator";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PassengerPipe,
    NameValidator,
    AsyncNameValidator
  ],
  providers: [
    // Vorerst keine Provider
  ],
  exports: [
    PassengerPipe,
    NameValidator,
    AsyncNameValidator
  ]

})
export class SharedModule {

}
