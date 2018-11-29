import { Action } from '@ngrx/store';
import { Flight } from '../models/flight';

export interface AppState {
  flights: Flight[] | undefined;
  flightsError: string | undefined;
}

export const initialState: AppState = {
  flights: undefined,
  flightsError: undefined
};

export function appReducer(state = initialState, action: Action): AppState {
  switch (action.type) {

    default:
      return state;
  }
}
