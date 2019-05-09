import { Component, OnInit } from '@angular/core';
import { animationFrameScheduler, of } from 'rxjs';
import { observeOn } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    of(42).pipe(
      observeOn(animationFrameScheduler)
    ).subscribe(() => console.log('0 Observable'));

    requestAnimationFrame(() => {
      console.log('1 animation frame');
    });

    setTimeout(() => {
      console.log('2 setTimeout');
    }, 0);

    Promise.resolve().then(() => {
      console.log('3 Promise');
    });

    console.log('4 Normales Console');
  }
}
