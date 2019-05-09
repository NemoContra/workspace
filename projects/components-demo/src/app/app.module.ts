import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FlightBookingComponent } from './flight-booking/flight-booking.component';
import { FlightCardComponent } from './flight-booking/flight-card/flight-card.component';
import { FlightSearchComponent } from './flight-booking/flight-search/flight-search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Config } from './models/config';
import { ClickWithWarningDirective } from './flight-booking/click-with-warning/click-with-warning.directive';
import { MyErrorHandlerService } from './my-error-handler.service';

export const APP_CONFIG: Config = {
  searchDebounceTime: 300
};

@NgModule({
  declarations: [
    AppComponent,
    FlightBookingComponent,
    FlightCardComponent,
    FlightSearchComponent,
    ClickWithWarningDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: Config, useValue: APP_CONFIG},
    {provide: ErrorHandler, useExisting: MyErrorHandlerService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
