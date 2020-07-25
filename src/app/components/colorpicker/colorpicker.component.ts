import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-colorpicker',
  templateUrl: './colorpicker.component.html',
  styleUrls: ['./colorpicker.component.scss']
})
export class ColorpickerComponent implements OnInit {

  //PARAMETROS DE ENTRADA
  @Input() Value:any; //Recibe la fecha que se desea asignar al datepicker
  @Input() Class: any; //Recibe el class dinamico para este componente
  @Input() Disabled = false; //Recibe true o false si este componente es desactivado
  @Input() Placeholder: any; //Recibe el placeholder del componente

  //PARAMETROS DE RETORNO AL COMPONENTE PADRE
  @Output() getValue = new EventEmitter<any>();

  color: ThemePalette = 'primary';
  touchUi = false;

  colorCtr: AbstractControl = new FormControl(null);

  public options = [
    { value: true, label: 'True' },
    { value: false, label: 'False' }
  ];

  public listColors = ['primary', 'accent', 'warn'];

  constructor() { }

  ngOnInit(): void {
  }

  public data = () => {
    this.getValue.emit(this.colorCtr.value);
  }

}
