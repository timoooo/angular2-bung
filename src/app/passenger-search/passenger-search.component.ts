import {Component} from "@angular/core";
import {Passenger} from "../entities/passengers";
import {Http, URLSearchParams, Headers} from "@angular/http";
import {PassengerService} from "./services/passenger-service";

@Component({
  selector: 'passenger-search', // <flight-search></...>
  templateUrl: './passenger-search.component.html',
  styleUrls: ['./passenger-search.component.css'],
  providers:[  ]
})
export class PassengerSearchComponent {

  public name: string;
  public firstname: string;

  public selectedPassenger: Passenger;

  constructor(private passengerService: PassengerService) {
  }

  // {{ flights }}
  public get passengers(): Array<Passenger> {
    return this.passengerService.passenger;
  }

  search(): void {
    this.passengerService.find(this.name, this.firstname);


  }

  select(passenger: Passenger): void {
    this.selectedPassenger = passenger;
  }

}
