/**
 * Created by timo on 02.12.16.
 */

import {Directive, forwardRef, Attribute} from "@angular/core";
import {Validator, AbstractControl, NG_VALIDATORS} from "@angular/forms";

@Directive({
  selector: 'input[allowedPassenger]',
  providers: [{provide: NG_VALIDATORS, useExisting: forwardRef(() => NameValidator), multi:true}]
})
export class NameValidator implements Validator {

  // @Input() city: string

  constructor(@Attribute('allowedPassenger') private allowedPassenger: string) {

  }

  validate(c: AbstractControl): any {

    //let allowedCities = ['Graz', 'Hamburg', 'Frankfurt', 'Wien', 'Zürich', 'Gleisdorf'];
    let validPassenger = this.allowedPassenger;
  //  hello
    if (validPassenger.indexOf(c.value) > -1) {
      return {};
    }

    return {
      validPassenger: "Passenger nicht vorhanden"
    };


  }

}

