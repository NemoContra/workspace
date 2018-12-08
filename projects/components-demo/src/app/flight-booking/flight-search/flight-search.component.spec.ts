import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightSearchComponent } from './flight-search.component';
import { FlightService } from '../../services/flight.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Flight } from '../../models/flight';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { skip, take } from 'rxjs/operators';

const testFlights: Flight[] = [{
  id: 1,
  from: 'Graz',
  to: 'Hamburg',
  date: '2018-12-08T10:00:00.000Z',
  delayed: false
}, {
  id: 2,
  from: 'Wien',
  to: 'Stuttgart',
  date: '2018-13-08T10:00:00.000Z',
  delayed: false
}];

@Component({
  selector: 'app-flight-card',
  template: ''
})
class FlightCardMockComponent {
  @Input() flights: Flight[];
  @Input() selectedFlight: Flight;
  @Output() selectedFlightChange = new EventEmitter();
}

describe('FlightSearchComponent', () => {
  let component: FlightSearchComponent;
  let fixture: ComponentFixture<FlightSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule
      ],
      declarations: [
        FlightSearchComponent,
        FlightCardMockComponent
      ],
      providers: [
        FlightService
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(FlightSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render flight-card component', () => {
    expect(fixture.nativeElement.querySelector('app-flight-card')).toBeTruthy();
  });

  it('should search a flight from Hamburg to Graz and find ond element', () => {
    const fromInput: HTMLInputElement = fixture.nativeElement.querySelectorAll('input')[0];
    const toInput: HTMLInputElement = fixture.nativeElement.querySelectorAll('input')[1];

    component.ngOnInit();

    fromInput.value = 'Graz';
    fromInput.dispatchEvent(new Event('input'));

    toInput.value = 'Hamburg';
    toInput.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    component.flights$.pipe(take(1)).subscribe(flights => expect(flights).toEqual([]));
    component.flights$.pipe(skip(1)).subscribe(flights => expect(flights).toEqual([testFlights[0]]));
  });

  it('should search a flight from Wien to Graz and find no elements', () => {
    const fromInput: HTMLInputElement = fixture.nativeElement.querySelectorAll('input')[0];
    const toInput: HTMLInputElement = fixture.nativeElement.querySelectorAll('input')[1];

    component.ngOnInit();

    fromInput.value = 'Wien';
    fromInput.dispatchEvent(new Event('change'));

    toInput.value = 'Graz';
    toInput.dispatchEvent(new Event('change'));

    fixture.detectChanges();

    component.flights$.pipe(take(1)).subscribe(flights => expect(flights).toEqual([]));
    component.flights$.pipe(skip(1)).subscribe(flights => expect(flights).toEqual([]));
  });
});
