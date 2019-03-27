import { Component, OnDestroy, OnInit } from '@angular/core';
import { of } from 'rxjs/internal/observable/of';
import { Observable, Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  public flights$: Observable<string[]> = of(['Flug1', 'Flug2']);
  public airports$: Observable<string[]> = of(['Airport1', 'Airport2']);

  public flights: string[];
  public airports: string[];

  private destroy$ = new Subject();

  ngOnInit(): void {
    this.flights$.pipe(
      takeUntil(this.destroy$)
    ).subscribe(flights => this.flights = flights);

    this.airports$.pipe(
      takeUntil(this.destroy$)
    ).subscribe(airports => this.airports = airports);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
