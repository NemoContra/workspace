import { NgModule } from '@angular/core';
import { GreetPipe } from './greet.pipe';

@NgModule({
  declarations: [GreetPipe],
  providers: [],
  exports: [GreetPipe]
})
export class GreetModule {
}
