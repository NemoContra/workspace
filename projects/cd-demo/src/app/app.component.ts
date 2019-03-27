import { Component, DoCheck, OnInit } from '@angular/core';
import { GreetingInfo } from './models';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  public greeting = 'Hello';
  public name = 'Florian';

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    console.log('Change detection for AppComponent');
  }

  onClick(): void {
    // Start change detection
  }

  changeName(): void {
    this.name = 'Alex';
    this.dataService.changeGreetingInfo({greeting: 'Hello', name: 'Alex'});
  }
}
