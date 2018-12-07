import { Component, DoCheck, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FlightService } from '../../services/flight.service';
import { Observable } from 'rxjs';
import { Flight } from '../../models/flight';
import { concatMap, debounceTime, distinctUntilChanged, filter, startWith, tap } from 'rxjs/operators';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit, DoCheck {
  public searchGroup = new FormGroup({
    from: new FormControl('', Validators.required),
    to: new FormControl('', Validators.required)
  });

  public flights$: Observable<Flight[]>;
  public selectedFlight: Flight | null;

  constructor(private flightService: FlightService) { }

  ngOnInit(): void {
    this.flights$ = this.searchGroup.valueChanges.pipe(
      filter(() => this.searchGroup.valid),
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.selectedFlight = null),
      concatMap(({from, to}) => this.flightService.findFlights(from, to)),
      startWith([])
    );
  }

  ngDoCheck(): void {
    console.log('change detection for flight-search-component');
  }
}
