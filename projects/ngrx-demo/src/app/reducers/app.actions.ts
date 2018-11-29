import { Action } from '@ngrx/store';
import { Flight } from '../models/flight';

export enum AppActionTypes {
  LoadFlights = '[App] LoadFlights',
  LoadFlightsSuccess = '[App] LoadFlightsSuccess',
  LoadFlightsError = '[App] LoadFlightsError',
}

export class LoadFlights implements Action {
  readonly type = AppActionTypes.LoadFlights;
}

export class LoadFlightsSuccess implements Action {
  readonly type = AppActionTypes.LoadFlightsSuccess;
  constructor(public payload: Flight[]) {}
}

export class LoadFlightsError implements Action {
  readonly type = AppActionTypes.LoadFlightsError;
  constructor(public error: string) {}
}

export type AppActions = LoadFlights & LoadFlightsSuccess & LoadFlightsError;
