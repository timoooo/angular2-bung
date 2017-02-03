/**
 * Created by timo on 02.12.16.
 */

import {Directive, forwardRef} from "@angular/core";
import {AbstractControl, NG_ASYNC_VALIDATORS} from "@angular/forms";

@Directive({
  selector: 'input[asyncName]',
  providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: forwardRef(() => AsyncNameValidator ), multi:true}]
})
export class AsyncNameValidator {

  validate(c: AbstractControl): Promise<any> {

    return new Promise((resolve) => {
      setTimeout(() => {

        if (c.value == 'Muster' || c.value == 'Schneider') {
          resolve({});
        }
        else {
          resolve({asyncCity: true});
        }

      }, 100)
    })

  }

}

