import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Select } from '../../interface/select';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @Input() Options: Select; //Recibe las opciones a mostrar dentro del select
  @Input() Class: any; //Recibe el class dinamico para este componente
  @Input() Disabled = false; //Recibe true o false si este componente es desactivado
  @Input() Placeholder: any; //Recibe el placeholder del componente
  @Input() Value:any; //Recibe el placeholder del componente

  @Output() getValue = new EventEmitter<any>();
  @Output() keypress = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  public data = (element: any) => {
    this.getValue.emit(element);
  }

  public key = (element: any) => {
    this.keypress.emit(element);
  }

}
