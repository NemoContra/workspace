import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Flight } from '../models/flight';
import { State } from '../state';
import { selectFlights, selectFlightsError, selectFlightsLoading } from '../state/app.selectors';
import { loadFlights } from '../state/app.actions';

@Injectable({
  providedIn: 'root'
})
export class AppFacade {
  public flights$: Observable<Flight[]> = this.store.pipe(
    select(selectFlights)
  );

  public flightsLoading$: Observable<boolean> = this.store.pipe(
    select(selectFlightsLoading)
  );

  public flightsError$: Observable<string> = this.store.pipe(
    select(selectFlightsError)
  );

  constructor(private store: Store<State>) { }

  public loadFlights(urgent: boolean): void {
    this.store.dispatch(loadFlights({urgent}));
  }
}
