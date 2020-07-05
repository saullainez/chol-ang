import { Component, Input, Optional, Host, OnInit } from '@angular/core';
import { SatPopover } from '@ncstate/sat-popover';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-emergent-input',
  templateUrl: './emergent-input.component.html',
  styleUrls: ['./emergent-input.component.scss']
})
export class EmergentInputComponent implements OnInit {

  @Input()
  get value(): string { return this._value; }
  set value(x: string) {
    this.object = this._value = x;
  }
  private _value = '';

  object = '';

  constructor(@Optional() @Host() public popover: SatPopover) { }

  ngOnInit() {
    // subscribe to cancellations and reset form value
    if (this.popover) {
      this.popover.closed.pipe(filter(val => val == null))
        .subscribe(() => this.object = this.value || '');
    }
  }

  onSubmit() {
    if (this.popover) {
      this.popover.close(this.object);
    }
  }

  onCancel() {
    if (this.popover) {
      this.popover.close();
    }
  }

}
