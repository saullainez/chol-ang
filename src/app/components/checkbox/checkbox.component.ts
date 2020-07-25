import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  //Parametros de entrada
  @Input() Class: string; //recibe la clase del componente
  @Input() Title: string; //recibe el titulo del checkbox
  @Input() Value = false; //recibe si esta check o no (true o false)
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
