/**
 * Created by timo on 25.11.16.
 */


import {PipeTransform, Pipe} from "@angular/core";
@Pipe({
  name: 'statusMap',
  pure: true
})
export class PassengerPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

    let long, short;
    let fmt = args[0]; // 'short', 'long'

    switch (value) {
      case "A":
        long = "Senator";
        short = "SEN";
        break;
      case "B":
        long = "Frequent Traveler";
        short = "FTL";
        break;
      case "C":
        long = short = "Passenger";
        break;
      default:
        long = short = "NiL";
        break;
    }

    if (fmt == 'short') return short;
    return long;


  }

}
