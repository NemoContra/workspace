import { Component, OnInit } from '@angular/core';
import { FlightService } from '../services/flight.service';
import { Observable } from 'rxjs';
import { Flight } from '../models/flight';

@Component({
  selector: 'app-flight-booking',
  templateUrl: './flight-booking.component.html',
  styleUrls: ['./flight-booking.component.css']
})
export class FlightBookingComponent implements OnInit {
  public flights$: Observable<Flight[]>;


  constructor(private flightService: FlightService) { }

  ngOnInit() {
    this.flights$ = this.flightService.getFlights();
  }
}
