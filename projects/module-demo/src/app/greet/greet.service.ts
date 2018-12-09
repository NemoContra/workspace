import { Injectable } from '@angular/core';

@Injectable()
export class GreetService {
  constructor() {
    console.log('Service instance created');
  }

  public greet(name: string): string {
    return name;
  }
}
