import { Component } from '@angular/core';
import { GreetService } from '../greet/greet.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  constructor(private greetService: GreetService) { }

  public greet(name: string): void {
    alert(this.greetService.greet(name));
  }
}
