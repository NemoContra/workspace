import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, OnInit } from '@angular/core';
import { GreetingInfo } from '../models';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-advanced-greeter',
  templateUrl: './advanced-greeter.component.html',
  styleUrls: ['./advanced-greeter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdvancedGreeterComponent implements OnInit, DoCheck {
  public greetingInfo: GreetingInfo;

  constructor(private dataService: DataService,
              private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.dataService.greetingInfo$.subscribe(greetingInfo => {
      this.greetingInfo = greetingInfo;
      this.changeDetectorRef.markForCheck();
    });
  }

  ngDoCheck(): void {
    console.log('Change detection for AdvancedGreeterComponent');
  }
}
