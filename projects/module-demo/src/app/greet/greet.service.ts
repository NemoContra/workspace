import { Injectable, Optional } from '@angular/core';
import { GreetConfig } from './greet.config';

@Injectable()
export class GreetService {
  constructor(@Optional() private greetConfig: GreetConfig) {
    console.log('Service instance created');
  }

  public greet(name: string): string {
    const greet = `Hello ${name}`;

    if (this.greetConfig && this.greetConfig.showDate) {
      return `[${new Date().toISOString()}] ${greet}`;
    } else {
      return greet;
    }
  }
}
