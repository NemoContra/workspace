import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from './models/flight';
import { AppFacade } from './state/app.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  flights$: Observable<Flight[]>;

  constructor(private appFacade: AppFacade) { }

  ngOnInit(): void {
    this.flights$ = this.appFacade.getFlights();
  }

  loadFlights(urgent: boolean): void {
    this.appFacade.loadFlights(urgent);
  }
}
