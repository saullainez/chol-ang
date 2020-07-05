import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
//import {MAT_MOMENT_DATE_FORMATS} from '@angular/material-moment-adapter';
//import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import { MAT_DATE_LOCALE } from "@angular/material/core";
import { MomentDateAdapter } from "@angular/material-moment-adapter";
import { Moment } from "moment";
import * as moment from "moment";

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
})

export class DatepickerComponent implements OnInit {

  //PARAMETROS DE ENTRADA
  @Input() options: any; //Recibe las opciones a mostrar dentro del autocomplete
  @Input() class: any; //Recibe el class dinamico para este componente
  @Input() disabled: any; //Recibe true o false si este componente es desactivado
  @Input() Placeholder: any; //Recibe el placeholder del componente

  //PARAMETROS DE RETORNO AL COMPONENTE PADRE
  @Output() getData = new EventEmitter<any>();
  @Output() keypress = new EventEmitter<any>();

  Model:any;

  constructor(private momentadapter:MomentDateAdapter) { }

  ngOnInit(): void {
  }

}
