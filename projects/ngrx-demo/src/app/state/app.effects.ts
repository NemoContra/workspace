import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { FlightService } from '../services/flight.service';
import { Action } from '@ngrx/store';
import { loadFlights, loadFlightsError, loadFlightsSuccess } from './app.actions';
import { catchError, exhaustMap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppEffects {
  loadFlights$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
    ofType(loadFlights),
    map(({urgent}) => urgent),
    exhaustMap(urgent => {
      return this.flightsClient.getFlights(urgent).pipe(
        catchError(() => {
          return of(undefined);
        })
      );
    }),
    map(flights => {
      return flights ? loadFlightsSuccess({flights}) :
        loadFlightsError({flightsError: 'It failed'});
    })
  ));

  constructor(private actions$: Actions,
              private flightsClient: FlightService) {}
}
