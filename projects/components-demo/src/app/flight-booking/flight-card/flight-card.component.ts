import { ChangeDetectionStrategy, Component, DoCheck, EventEmitter, Input, Output } from '@angular/core';
import { Flight } from '../../models/flight';

@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlightCardComponent implements DoCheck {
  @Input() flights: Flight[];
  @Input() selectedFlight: Flight;
  @Output() selectedFlightChange = new EventEmitter();

  public onSelectFlight(flight: Flight): void {
    this.selectedFlight = flight;
    this.selectedFlightChange.emit(flight);
  }

  ngDoCheck(): void {
    console.log('change detection for flight-card-component');
  }
}
