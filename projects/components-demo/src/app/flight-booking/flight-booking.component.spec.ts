import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightBookingComponent } from './flight-booking.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-flight-search',
  template: '<span>Test</span>'
})
class FlightSearchMockComponent {
}

describe('FlightBookingComponent', () => {
  let component: FlightBookingComponent;
  let fixture: ComponentFixture<FlightBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        FlightBookingComponent,
        FlightSearchMockComponent
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(FlightBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render flight-search component', () => {
    expect(fixture.nativeElement.querySelector('app-flight-search span').innerHTML).toEqual('Test');
  });
});
