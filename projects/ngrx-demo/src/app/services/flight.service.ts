import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Flight } from '../models/flight';
import { LoadFlightsAction } from '../state/app.actions';
import { State } from '../state';
import { selectFlights } from '../state/app.selectors';

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
