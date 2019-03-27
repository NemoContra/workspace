import { ChangeDetectionStrategy, Component, DoCheck, Input } from '@angular/core';

@Component({
  selector: 'app-greeter',
  templateUrl: './greeter.component.html',
  styleUrls: ['./greeter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GreeterComponent implements DoCheck {
  @Input() greeting: string;
  @Input() name: string;
  @Input() id: string;

  ngDoCheck(): void {
    console.log('Change detection for GreeterComponent', this.id);
  }
}
