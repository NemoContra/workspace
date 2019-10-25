import { createAction, props } from '@ngrx/store';
import { Flight } from '../models/flight';

export const loadFlights = createAction(
  '[App] LoadFlights',
  props<{urgent: boolean}>()
);

export const loadFlightsSuccess = createAction(
  '[App] LoadFlightsSuccess',
  props<{flights: Flight[]}>()
);

export const loadFlightsError = createAction(
  '[App] LoadFlightsError',
  props<{flightsError: string}>()
);
