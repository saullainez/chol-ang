import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
@Component({
  selector: 'app-slide-toggle',
  templateUrl: './slide-toggle.component.html',
  styleUrls: ['./slide-toggle.component.scss']
})
export class SlideToggleComponent implements OnInit {

  //Parametros de entrada
  @Input() Class: string; //recibe la clase del componente
  @Input() Title: string; //recibe el titulo del checkbox
  @Input() Value: boolean; //recibe si esta check o no (true o false)
  @Input() Disabled = false; //recibe si esta inhabilitado o no (true o false)

  //Parametros de salida
  @Output() getValue = new EventEmitter<any>();

  Color: ThemePalette = 'primary';
  constructor() { }

  ngOnInit(): void {
  }

  public data = (element: any) => {
    this.getValue.emit(element);
  }
}
