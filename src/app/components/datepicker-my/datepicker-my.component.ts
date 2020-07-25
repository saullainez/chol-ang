import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { FormControl } from '@angular/forms';
import { Moment } from 'moment';
import * as moment from 'moment';
//import moment = require('moment');
export const MY_FORMATS = {

  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-datepicker-my',
  templateUrl: './datepicker-my.component.html',
  styleUrls: ['./datepicker-my.component.scss'],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ]
})
export class DatepickerMyComponent implements OnInit {

  //PARAMETROS DE ENTRADA
  @Input() Model:any; //Recibe la fecha que se desea asignar al datepicker
  @Input() class: any; //Recibe el class dinamico para este componente
  @Input() disabled: true; //Recibe true o false si este componente es desactivado
  @Input() Placeholder: any; //Recibe el placeholder del componente

  //PARAMETROS DE RETORNO AL COMPONENTE PADRE
  @Output() getYear = new EventEmitter<any>();
  @Output() getMonth = new EventEmitter<any>();
  moment: any;
  //date: any;

  public arrayCapt = {
    capt_disp: null,
    month: null,
    year: null
  };

  constructor(private _adapter: DateAdapter<any>) {
  }

  ngOnInit(): void {
    this._adapter.setLocale('es');
  }

  //public date = new FormControl(moment());
  public date = new FormControl(moment()); //Initialize the date without moment

  chosenYearHandler(valueYear) {
    this.arrayCapt.year = moment(valueYear).year();
  }

  chosenMonthHandler(valueMonth, datepicker: MatDatepicker<Moment>) {
    const ctrlValue = new FormControl(moment()).value;
    ctrlValue.month(moment(valueMonth).date());
    //this.date.setValue(ctrlValue);
    this.arrayCapt.month = moment(valueMonth).month();
    this.date.setValue({'year': this.arrayCapt.year, 'month': this.arrayCapt.month});
    datepicker.close();
  }
}
