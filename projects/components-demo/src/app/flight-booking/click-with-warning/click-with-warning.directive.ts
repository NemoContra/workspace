import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: 'button[clickWithWarning]'
})
export class ClickWithWarningDirective {
  @Input() warning = 'Do you really want to do this?';
  @Output() clickWithWarning = new EventEmitter();

  @HostListener('click')
  handleClick(): void {
    if (confirm(this.warning)) {
      this.clickWithWarning.emit();
    } else {
      throw new Error('Not confirmed');
    }
  }
}
