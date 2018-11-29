import { AppState } from './app.reducer';
import { Flight } from '../models/flight';
import { createSelector } from '@ngrx/store';
import { State } from './index';

const selectApp = (state: State) => state.app;

function flightsSelector(state: AppState): Flight[] {
  return state.flights;
}

export const selectFlights = createSelector(selectApp, flightsSelector);
