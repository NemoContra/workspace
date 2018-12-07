import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Flight } from '../models/flight';
import { map, publishReplay, refCount } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  private flights$: Observable<Flight[]> = this.httpClient.get<Flight[]>('http://www.angular.at/api/flight').pipe(
    publishReplay(1),
    refCount()
  );

  constructor(private httpClient: HttpClient) { }

  public getFlights(): Observable<Flight[]> {
    return this.flights$;
  }

  public findFlights(from: string, to: string): Observable<Flight[]> {
    return this.flights$.pipe(
      map(flights => flights.filter(flight => flight.from === from && flight.to === to))
    );
  }
}
