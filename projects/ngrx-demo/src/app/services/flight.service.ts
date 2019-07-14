import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Flight } from '../models/flight';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  constructor(private httpClient: HttpClient) { }

  public getFlights(urgent: boolean): Observable<Flight[]> {
    return this.httpClient.get<Flight[]>(urgent ?
      'http://www.angular.at/api/error?code=403' :
      'http://www.angular.at/api/flight'
    );
  }
}
