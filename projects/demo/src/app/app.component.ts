import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Flight } from './models/flight';
import { filter, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  submit$$ = new Subject<void>();
  formGroup = new FormGroup({
    from: new FormControl(''),
    to: new FormControl('')
  });
  flights$: Observable<Flight[]>;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.flights$ = this.submit$$.pipe(
      filter(() => this.formGroup.get('from').value && this.formGroup.get('to').value),
      switchMap(() => this.getFlights())
    );
  }

  getFlights(): Observable<Flight[]> {
    return this.httpClient.get<Flight[]>('http://www.angular.at/api/flight');
  }
}
