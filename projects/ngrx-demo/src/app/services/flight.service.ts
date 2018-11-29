import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../reducers';
import { Observable, of } from 'rxjs';
import { Flight } from '../models/flight';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  constructor(private store: Store<State>) { }

  public getFlights(): Observable<Flight[]> {
    return of(undefined);
  }
}
