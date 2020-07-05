import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Autocomplete } from '../../interface/autocomplete';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {

  //PARAMETROS DE ENTRADA
  @Input() options: any; //Recibe las opciones a mostrar dentro del autocomplete
  @Input() class: any; //Recibe el class dinamico para este componente
  @Input() disabled: any; //Recibe true o false si este componente es desactivado
  @Input() Placeholder: any; //Recibe el placeholder del componente

  //PARAMETROS DE RETORNO AL COMPONENTE PADRE
  @Output() getData = new EventEmitter<any>();
  @Output() keypress = new EventEmitter<any>();

  Model:any;
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;

  constructor() { }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this.filter(value))
    );

    if(this.disabled)
    {
      this.myControl.disable();
    }
  }

  private filter(value: any): any[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  public data = (element: any) => {
    const keys = Object.keys(element);
    this.getData.emit(element);
  }

  public key = (element: any) => {
      const keys = Object.keys(element);
      this.keypress.emit(element);
  }

}
