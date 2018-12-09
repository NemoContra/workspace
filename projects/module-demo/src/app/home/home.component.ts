import { Component } from '@angular/core';
import { GreetService } from '../greet/greet.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private greetService: GreetService) { }

  public greet(name: string): void {
    alert(this.greetService.greet(name));
  }
}
