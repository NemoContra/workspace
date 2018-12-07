import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FlightBookingComponent } from './flight-booking/flight-booking.component';
import { FlightCardComponent } from './flight-booking/flight-card/flight-card.component';
import { FlightSearchComponent } from './flight-booking/flight-search/flight-search.component';

@NgModule({
  declarations: [
    AppComponent,
    FlightBookingComponent,
    FlightCardComponent,
    FlightSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
