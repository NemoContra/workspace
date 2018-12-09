import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightCardComponent } from './flight-card.component';
import { Component } from '@angular/core';
import { Flight } from '../../models/flight';

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
  template: '<app-flight-card [flights]="flights" [(selectedFlight)]="selectedFlight"></app-flight-card>'
})
class TestHostComponent {
  public flights: Flight[];
  public selectedFlight: Flight;
}

describe('FlightCardComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TestHostComponent,
        FlightCardComponent
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render nothing', () => {
    expect(fixture.nativeElement.querySelector('div')).toBeNull();
    component.flights = [];
    expect(fixture.nativeElement.querySelector('div')).toBeNull();
  });

  it('should render a list with two flights and none selected', () => {
    component.flights = testFlights;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('div').length).toBe(2);
    expect(fixture.nativeElement.querySelectorAll('div')[0].classList).not.toContain('selected');
    expect(fixture.nativeElement.querySelectorAll('div')[1].classList).not.toContain('selected');
  });

  it('should render a list with two flights and first one selected', () => {
    component.flights = testFlights;
    component.selectedFlight = testFlights[0];
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelectorAll('div').length).toBe(2);
    expect(fixture.nativeElement.querySelectorAll('div')[0].classList).toContain('selected');
  });

  it('should render a list with two flights and first preselected, then select the second one', () => {
    component.flights = testFlights;
    component.selectedFlight = testFlights[0];
    fixture.detectChanges();

    const selectButton: HTMLButtonElement = fixture.nativeElement.querySelectorAll('button')[1];
    selectButton.click();

    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('div')[0].classList).not.toContain('selected');
    expect(fixture.nativeElement.querySelectorAll('div')[1].classList).toContain('selected');
  });
});
