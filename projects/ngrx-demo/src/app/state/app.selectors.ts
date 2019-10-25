import { AppState } from './app.reducer';
import { Flight } from '../models/flight';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const selectApp = createFeatureSelector('app');

function flightsSelector(state: AppState): Flight[] {
  return state.flights;
}

function flightsLoadingSelector(state: AppState): boolean {
  return state.flightsLoading;
}

function flightsErrorSelector(state: AppState): string {
  return state.flightsError;
}

export const selectFlights = createSelector(selectApp, flightsSelector);
export const selectFlightsLoading = createSelector(selectApp, flightsLoadingSelector);
export const selectFlightsError = createSelector(selectApp, flightsErrorSelector);
