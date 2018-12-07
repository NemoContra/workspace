import { ChangeDetectionStrategy, Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-flight-booking',
  templateUrl: './flight-booking.component.html',
  styleUrls: ['./flight-booking.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlightBookingComponent implements DoCheck {
  ngDoCheck(): void {
    console.log('change detection for flight-booking-component');
  }
}
