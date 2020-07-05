import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog-confirm',
  templateUrl: './dialog-confirm.component.html',
  styleUrls: ['./dialog-confirm.component.scss']
})
export class DialogConfirmComponent implements OnInit {

  //Parametros de entrada
  @Input() Title: string; //recibe el titulo de la tabla
  @Input() Text: string; //recibe el texto del cuerpo del mensaje

  constructor() { }

  ngOnInit(): void {
    this.Title = 'CONFIRMACIÓN';
    this.Text = 'Desea eliminar este registro?';
  }

}
