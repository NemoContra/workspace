import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicGreeterElement } from './dynamic-greeter/dynamic-greeter.element';
import { GreetPipe } from './greet-pipe/greet.pipe';
import { GreeterConfig } from './greeter.config';
import { ReactiveFormsModule } from '@angular/forms';
import { GreeterService } from './services/greeter.service';
import { StaticGreeterComponent } from './static-greeter/static-greeter.component';
import { PushPipeModule } from '@ngrx-utils/store';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PushPipeModule
  ],
  declarations: [
    DynamicGreeterElement,
    StaticGreeterComponent,
    GreetPipe
  ],
  exports: [
    DynamicGreeterElement,
    StaticGreeterComponent
  ],
  entryComponents: [
    DynamicGreeterElement,
    StaticGreeterComponent
  ]
})
export class GreeterModule {
  public static forRoot(greeterConfig: GreeterConfig): ModuleWithProviders {
    return {
      ngModule: GreeterModule,
      providers: [
        GreeterService,
        {provide: GreeterConfig, useValue: greeterConfig}
      ]
    };
  }
}
