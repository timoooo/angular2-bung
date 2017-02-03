import {Injectable, Inject} from "@angular/core";
import {Http, URLSearchParams, Headers} from "@angular/http";
import {BASE_URL} from "../../app.tokens";
import { Passenger } from '../../entities/passengers';
import { Observable } from 'rxjs';
import { OAuthService } from 'angular-oauth2-oidc';

@Injectable()
export class PassengerService {

  passenger: Array<Passenger> = [];

  constructor(
    @Inject(BASE_URL) private baseUrl: string,
    private http: Http,
    private oauthService: OAuthService) {

  }

  public findById(id: string): Observable<Passenger> {

    let url = this.baseUrl;

    let search = new URLSearchParams();
    search.set('id', id);

    let headers = new Headers();
    headers.set('Accept', 'application/json');

    return this
      .http
      .get(url, { headers, search })
      .map(resp => resp.json());

  }

  public save(passenger: Passenger): Observable<Passenger> {

    let url = this.baseUrl;

    let headers = new Headers();
    headers.set('Accept', 'application/json');

    return this
      .http
      .post(url, passenger, { headers })
      .map(resp => resp.json());

  }



  public find(name: string, firstName: string): void {

    let url = this.baseUrl;

    let search = new URLSearchParams();
    search.set('name', name);
    search.set('firstName', firstName);

    let headers = new Headers();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', 'Bearer ' + this.oauthService.getAccessToken() );

    this
      .http
      .get(url, { headers, search })
      .map(resp => resp.json())
      .subscribe(
        (passenger) => {
          this.passenger = passenger;
        },
        (err) => {
          console.error('Fehler beim Laden', err);
        }
      );

  }

}
