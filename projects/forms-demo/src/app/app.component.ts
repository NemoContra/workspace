import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { debounceTime, distinctUntilChanged, exhaustMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public flugSuchenForm: FormGroup;
  public flights$: Observable<any>;

  constructor(fb: FormBuilder, private httpClient: HttpClient) {
    this.flugSuchenForm = fb.group({
      von: ['', Validators.required],
      nach: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.flights$ = this.flugSuchenForm.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      exhaustMap(value => {
        const { von, nach } = value;

        const params = new HttpParams().set('from', von).set('to', nach);

        return this.flights$ = this.httpClient
          .get<any>('http://www.angular.at/api/flight', {params});
      })
    );
  }
}
