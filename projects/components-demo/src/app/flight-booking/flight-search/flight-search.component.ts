import { Component, DoCheck, OnInit, Optional } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FlightService } from '../../services/flight.service';
import { MonoTypeOperatorFunction, Observable } from 'rxjs';
import { Flight } from '../../models/flight';
import { concatMap, debounceTime, distinctUntilChanged, filter, startWith, tap } from 'rxjs/operators';
import { Config } from '../../models/config';

function debounceOrNot<T>(time: number = 0): MonoTypeOperatorFunction<T> {
  return time > 0 ? debounceTime(time) : tap();
}

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

  constructor(private flightService: FlightService, @Optional() private config: Config | undefined) { }

  ngOnInit(): void {
    this.flights$ = this.searchGroup.valueChanges.pipe(
      filter(() => this.searchGroup.valid),
      debounceOrNot(this.config && this.config.searchDebounceTime),
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
