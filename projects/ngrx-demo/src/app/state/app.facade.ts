import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Flight } from '../models/flight';
import { State } from '../state';
import { selectFlights } from '../state/app.selectors';
import { loadFlights } from '../state/app.actions';

@Injectable({
  providedIn: 'root'
})
export class AppFacade {
  constructor(private store: Store<State>) { }

  public loadFlights(urgent: boolean): void {
    this.store.dispatch(loadFlights({urgent}));
  }

  public getFlights(): Observable<Flight[]> {
    return this.store.pipe(
      select(selectFlights)
    );
  }
}
