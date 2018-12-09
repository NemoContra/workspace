import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightSearchComponent } from './flight-search.component';
import { FlightService } from '../../services/flight.service';
import { ReactiveFormsModule } from '@angular/forms';
import { Flight } from '../../models/flight';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { of } from 'rxjs';

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

export function flightServiceMockFactory() {
  return {
    getFlights: jasmine.createSpy('getFlights').and.returnValue(of(testFlights)),
    findFlights: jasmine.createSpy('findFlights').and.returnValue(of(testFlights))
  };
}

describe('FlightSearchComponent', () => {
  let component: FlightSearchComponent;
  let fixture: ComponentFixture<FlightSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [
        FlightSearchComponent,
        FlightCardMockComponent
      ],
      providers: [
        {provide: FlightService, useFactory: flightServiceMockFactory}
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

  it('should search a flight from Graz to Hamburg and find ond element', () => {
    const fromInput: HTMLInputElement = fixture.nativeElement.querySelectorAll('input')[0];
    const toInput: HTMLInputElement = fixture.nativeElement.querySelectorAll('input')[1];

    component.ngOnInit();

    fromInput.value = 'Graz';
    fromInput.dispatchEvent(new Event('input'));

    toInput.value = 'Hamburg';
    toInput.dispatchEvent(new Event('input'));

    const flightService: FlightService = TestBed.get(FlightService);
    expect(flightService.findFlights).toHaveBeenCalledWith('Graz', 'Hamburg');
  });

  it('should search a flight from Wien to Graz and find no elements', () => {
    const fromInput: HTMLInputElement = fixture.nativeElement.querySelectorAll('input')[0];
    const toInput: HTMLInputElement = fixture.nativeElement.querySelectorAll('input')[1];

    component.ngOnInit();

    fromInput.value = 'Wien';
    fromInput.dispatchEvent(new Event('input'));

    toInput.value = 'Graz';
    toInput.dispatchEvent(new Event('input'));

    const flightService: FlightService = TestBed.get(FlightService);
    expect(flightService.findFlights).toHaveBeenCalledWith('Wien', 'Graz');
  });
});
