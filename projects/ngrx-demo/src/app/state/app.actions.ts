import { Action } from '@ngrx/store';
import { Flight } from '../models/flight';

export enum AppActionTypes {
  LoadFlights = '[App] LoadFlights',
  LoadFlightsSuccess = '[App] LoadFlightsSuccess',
  LoadFlightsError = '[App] LoadFlightsError',
}

export class LoadFlightsAction implements Action {
  readonly type = AppActionTypes.LoadFlights;
  constructor(public payload: boolean) { }
}

export class LoadFlightsSuccessAction implements Action {
  readonly type = AppActionTypes.LoadFlightsSuccess;
  constructor(public payload: Flight[]) {}
}

export class LoadFlightsErrorAction implements Action {
  readonly type = AppActionTypes.LoadFlightsError;
  constructor(public payload: string) {}
}

export type AppActions = LoadFlightsAction | LoadFlightsSuccessAction | LoadFlightsErrorAction;
