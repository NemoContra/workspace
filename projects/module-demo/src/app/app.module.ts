import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GreetModule } from './greet/greet.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GreetModule.forRoot({
      showDate: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
