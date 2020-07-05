import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Select } from '../../interface/select';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @Input() options: Select; //Recibe las opciones a mostrar dentro del autocomplete
  @Input() class: any; //Recibe el class dinamico para este componente
  @Input() disabled: any; //Recibe true o false si este componente es desactivado
  @Input() Placeholder: any; //Recibe el placeholder del componente

  @Output() getData = new EventEmitter<any>();
  @Output() keypress = new EventEmitter<any>();
  Model:any;
  constructor() { }

  ngOnInit(): void {
  }

  public data = (element: any) => {
    this.getData.emit(element);
  }

  public key = (element: any) => {
    this.keypress.emit(element);
  }

}
