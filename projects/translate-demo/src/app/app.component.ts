import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  public languageFormGroup = new FormGroup({
    language: new FormControl('en'),
    name: new FormControl('')
  });

  private destroy$ = new Subject<boolean>();

  constructor(private translateService: TranslateService) {
    translateService.setDefaultLang('en');
    translateService.use('en');
  }

  ngOnInit(): void {
    this.languageFormGroup.get('language').valueChanges.pipe(
      takeUntil(this.destroy$)
    ).subscribe(lang => this.translateService.use(lang));
  }

  public greet(): void {
    this.translateService.get('app.alerts.hello', {
      name: this.languageFormGroup.get('name').value
    }).pipe(
      takeUntil(this.destroy$)
    ).subscribe(translation => {
      alert(translation);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }
}
