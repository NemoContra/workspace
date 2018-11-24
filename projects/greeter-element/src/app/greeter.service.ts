import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GreeterService {
  public greet(name: string): string {
    return `Hello ${name}`;
  }
}
