import { Pipe, PipeTransform } from '@angular/core';
import { GreetService } from './greet.service';

@Pipe({
  name: 'greet'
})
export class GreetPipe implements PipeTransform {
  constructor(private greeterService: GreetService) { }

  transform(name: string): string {
    return this.greeterService.greet(name);
  }
}
