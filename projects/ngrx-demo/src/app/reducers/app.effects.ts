import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { AppActionTypes, LoadFlightsAction, LoadFlightsErrorAction, LoadFlightsSuccessAction } from './app.actions';
import { FlightClient } from '../services/flight.client';


@Injectable()
export class AppEffects {
  @Effect() loadFlights$: Observable<any> =
    this.actions$.pipe(
      ofType<LoadFlightsAction>(AppActionTypes.LoadFlights),
      map(action => action.payload),
      exhaustMap(urgent => {
        return this.flightsClient.getFlights(urgent).pipe(
          catchError(() => {
            return of(undefined);
          })
        );
      }),
      map(flights => {
        return flights ? new LoadFlightsSuccessAction(flights) :
          new LoadFlightsErrorAction('It failed');
      })
    );

  constructor(private actions$: Actions,
              private flightsClient: FlightClient) {}
}
