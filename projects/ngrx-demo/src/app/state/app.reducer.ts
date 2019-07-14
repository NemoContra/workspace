import { Flight } from '../models/flight';
import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { loadFlights, loadFlightsError, loadFlightsSuccess } from './app.actions';

export interface AppState {
  flights: Flight[] | undefined;
  flightsError: string | undefined;
  flightsLoading: boolean;
}

export const initialState: AppState = {
  flights: undefined,
  flightsError: undefined,
  flightsLoading: false
};

export function appReducer(state: AppState, action: Action): AppState {
  return reducer(state, action);
}

const reducer: ActionReducer<AppState> = createReducer(
  initialState,
  on(
    loadFlights,
      state => ({
        ...state,
        flightsLoading: true
      })
  ),
  on(
    loadFlightsSuccess,
    (state, {flights}) => ({
      ...state,
      flightsLoading: false,
      flights
    })
  ),
  on(
    loadFlightsError,
    (state, {flightsError}) => ({
      ...state,
      flightsLoading: false,
      flights: undefined,
      flightsError
    })
  )
);
