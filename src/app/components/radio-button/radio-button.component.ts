import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss']
})
export class RadioButtonComponent implements OnInit {

  //Parametros de entrada
  @Input() Class: string; //recibe la clase del componente
  @Input() Title: string; //recibe el titulo del checkbox
  @Input() Value: any; //recibe el valor preseleccionado del radiobutton
  @Input() Options: any; //recibe las opciones a mostrar
  @Input() Type: string; //recibe si desea msotrar vertical u horizontal
  @Input() Position: string; //recibe la posición en la que se debería mostrar el label en el check (before o after)
  @Input() Disabled = false; //recibe si esta inhabilitado o no (true o false)

  //Parametros de salida
  @Output() getValue = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  public data = (element: any) => {
    this.getValue.emit(element);
  }

}
