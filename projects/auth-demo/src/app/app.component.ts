import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService, TokenPayload } from './services/auth.service';
import { Observable, Subject } from 'rxjs';
import { Flight, FlightsService } from './services/flights.service';
import { exhaustMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public tokenPayload$: Observable<TokenPayload>;
  public flights$: Observable<Flight[]>;

  private loginSubject = new Subject<boolean>();

  public loginFormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private authService: AuthService, private flightService: FlightsService) { }

  ngOnInit(): void {
    this.flights$ = this.loginSubject.pipe(
      exhaustMap(() => this.flightService.getFlights())
    );
  }

  onLogin(): void {
    this.tokenPayload$ = this.authService.login(this.loginFormGroup.value);
  }

  onLoadFlights(): void {
    this.loginSubject.next(true);
  }

  logout(): void {
    this.authService.logout();
  }

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }
}
