import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from './models/flight';
import { AppFacade } from './state/app.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  flights$: Observable<Flight[]> = this.appFacade.flights$;
  flightsLoading$: Observable<boolean> = this.appFacade.flightsLoading$;
  flightsError$: Observable<string> = this.appFacade.flightsError$;

  constructor(private appFacade: AppFacade) { }

  loadFlights(urgent: boolean): void {
    this.appFacade.loadFlights(urgent);
  }
}
