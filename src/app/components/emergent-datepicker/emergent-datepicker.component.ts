import { Component, Input, Optional, Host, OnInit } from '@angular/core';
import { SatPopover } from '@ncstate/sat-popover';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-emergent-datepicker',
  templateUrl: './emergent-datepicker.component.html',
  styleUrls: ['./emergent-datepicker.component.scss']
})
export class EmergentDatepickerComponent implements OnInit {

  @Input()
  get value(): any { return this._value; }
  set value(x: any) {
    this.object = this._value = x;
  }
  private _value = '';

  object = '';

  constructor(@Optional() @Host() public popover: SatPopover) { }

  ngOnInit(): void {
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

  //FUNCIONES NECESARIAS PARA AUTOCOMPLETE
  public GetValueChange(event: any, variable: string) {
    this[variable] = event;
  }
}
