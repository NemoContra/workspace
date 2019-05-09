import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public flights$: Observable<any>;

  constructor(private httpClient: HttpClient) { }

  public searchGroup = new FormGroup({
    searchCtrl: new FormControl('')
  });

  ngOnInit(): void {
    this.flights$ = this.searchGroup.get('searchCtrl').valueChanges.pipe(
      debounceTime(0),
      distinctUntilChanged(),
      switchMap(value => {
        return this.httpClient.get(`http://angular.at/api/flight?from=${value}`);
      })
    );
  }
}
