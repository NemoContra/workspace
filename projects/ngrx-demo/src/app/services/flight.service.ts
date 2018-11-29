import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Flight } from '../models/flight';
import { LoadFlightsAction } from '../reducers/app.actions';
import { State } from '../reducers';
import { selectFlights } from '../reducers/app.selectors';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  constructor(private store: Store<State>) { }

  public loadFlights(urgent: boolean): void {
    this.store.dispatch(new LoadFlightsAction(urgent));
  }

  public getFlights(): Observable<Flight[]> {
    return this.store.pipe(
      select(selectFlights)
    );
  }
}
