import { ModuleWithProviders, NgModule } from '@angular/core';
import { GreetPipe } from './greet.pipe';
import { GreetService } from './greet.service';
import { GreetConfig } from './greet.config';

@NgModule({
  declarations: [GreetPipe],
  providers: [],
  exports: [GreetPipe]
})
export class GreetModule {
  public static forRoot(config?: GreetConfig): ModuleWithProviders {
    return {
      ngModule: GreetModule,
      providers: [
        GreetService,
        {provide: GreetConfig, useValue: config}
      ]
    };
  }

  public static forChild(config?: GreetConfig): ModuleWithProviders {
    return {
      ngModule: GreetModule,
      providers: [
        {provide: GreetConfig, useValue: config}
      ]
    };
  }
}
