import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from './models/flight';
import { FlightService } from './services/flight.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  flights$: Observable<Flight[]>;

  constructor(private flightService: FlightService) { }

  ngOnInit(): void {
    this.flights$ = this.flightService.getFlights();
  }

  loadFlights(urgent: boolean): void {
    this.flightService.loadFlights(urgent);
  }
}
