import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {FormControl} from '@angular/forms';
import * as moment from 'moment';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {DateAdapter} from '@angular/material/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ]

})

export class DatepickerComponent implements OnInit {

  //PARAMETROS DE ENTRADA
  @Input() Value:any; //Recibe la fecha que se desea asignar al datepicker
  @Input() Class: any; //Recibe el class dinamico para este componente
  @Input() Disabled = false; //Recibe true o false si este componente es desactivado
  @Input() Placeholder: any; //Recibe el placeholder del componente

  //PARAMETROS DE RETORNO AL COMPONENTE PADRE
  @Output() getValue = new EventEmitter<any>();

  date = new FormControl(moment());

  constructor(private _adapter: DateAdapter<any>) { }

  ngOnInit(): void {
    this._adapter.setLocale('es');

    if(this.Value)
    {
      var date = Date.parse(this.Value);
      this.Value = new FormControl(new Date(date));
    }
    else
    {
      this.Value = new FormControl(new Date());
    }
  }

  public data = (element: any) => {
    this.getValue.emit(element);
  }

}
