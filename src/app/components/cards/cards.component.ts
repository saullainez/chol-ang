import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  //Parametros de entrada
  @Input() Title: string; //recibe el titulo de la tabla
  @Input() SubTitle: string; //recibe el titulo de la tabla
  @Input() Text: string; //recibe el titulo de la tabla
  @Input() id: number; //recibe el id del elemento a crear
  @Input() UrlImage: any; //recibe la imagen a ser insertada dentro del cards
  @Input() showEdit = true; //true o false para ver la opcion de editar
  @Input() showDelete = true; //true o false para ver la opcion de eliminar

  //Parametros de salida
  @Output() EditEvent = new EventEmitter<any>();
  @Output() deleteEvent = new EventEmitter<any>();
  @Output() multipleKey = false; //disparador de eventos para eliminar

  constructor() { }

  ngOnInit(): void {
  }

  //redirecciona el id de la fila a otra url
  public EditUrl = (element: any) => {
    const keys = Object.keys(element);
    //this.url = this.url + '/' + element;
    //this.router.navigate([this.url]);
  }

  //funcion que retorna el elemento a editar del datatable
  public Edit = (element: any) => {
    const keys = Object.keys(element);
    this.EditEvent.emit(element);
  }

  //funcion que retorna el elemento a eliminar del datatable
  public delete = (element: any) => {
    if (!this.multipleKey) {
      this.deleteEvent.emit(element);
    } else {
      this.deleteEvent.emit(element);
    }
  }
}
