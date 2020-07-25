import { Component, OnInit, Input, ViewChild, Output, EventEmitter, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-confirm',
  templateUrl: './dialog-confirm.component.html',
  styleUrls: ['./dialog-confirm.component.scss']
})
export class DialogConfirmComponent implements OnInit {

  //Parametros de entrada
  @Input() Title: string; //recibe el titulo de la tabla
  @Input() Text: string; //recibe el texto del cuerpo del mensaje

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.Title = data.title;
    this.Text = data.text;
   }

  ngOnInit(): void {
    
    
  }

}
