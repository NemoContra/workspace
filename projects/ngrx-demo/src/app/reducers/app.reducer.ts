import { Flight } from '../models/flight';
import { AppActions, AppActionTypes } from './app.actions';

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

export function appReducer(state = initialState, action: AppActions): AppState {
  switch (action.type) {
    case AppActionTypes.LoadFlights:
      return {...state, flightsLoading: true};
    case AppActionTypes.LoadFlightsSuccess:
      return {...state, flightsLoading: false, flights: action.payload, flightsError: undefined};
    case AppActionTypes.LoadFlightsError:
      return {...state, flightsLoading: false, flightsError: action.payload};
    default:
      return state;
  }
}
