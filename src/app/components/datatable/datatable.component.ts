import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  //Parametros de entrada
  @Input() Title: string; //recibe el titulo de la tabla
  @Input() columns: any; //recibe las columnas del datatable
  @Input() data: any; //recibe los datos del datatable
  @Input() showFilter = true; //recibe true o false si se desea ver el filtro de busqueda
  @Input() showEdit = true; //true o false para ver la opcion de editar
  @Input() showDelete = true; //true o false para ver la opcion de eliminar
  @Input() showDetails = true; //true o false para ver la opcion ver detalles
  @Input() multipleKey = false; //true o false para ver la opcion ver detalles
  @Input() url: string; //ruta de edición

  //Parametros de salida
  @Output() deleteEvent = new EventEmitter<any>();
  @Output() AddEvent = new EventEmitter<any>();
  @Output() detailsEvent = new EventEmitter<any>();
  @Output() Previous = new EventEmitter<any>();

  //datos del datatable
  dataSource:any;
  //encabezado del datatable
  displayedColumns: any;

  constructor(public router:Router) {
   }

  ngOnInit(): void {
    this.displayedColumns = this.columns.map(x=>x.def);
    this.dataSource = new MatTableDataSource(this.data);
    if (this.showEdit) { this.displayedColumns.push('edit'); }
    if (this.showDelete) { this.displayedColumns.push('delete'); }
  }

  ngAfterViewInit (): void {
    //this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event){
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}


//funcion para eliminar una fila del datatable
public delete = (element: any) => {
  const keys = Object.keys(element);
  if (!this.multipleKey) {
    this.deleteEvent.emit(element[keys[0]]);
  } else {
    this.deleteEvent.emit(element);
  }
}

addRecord() {
  this.AddEvent.emit();
}

//redirecciona el id de la fila a otra url
public EditUrl = (element: any) => {
  const keys = Object.keys(element);
  this.url = this.url + '/' + element[keys[0]];
  this.router.navigate([this.url]);
}

/*
public Edit = (element: any) => {
  const keys = Object.keys(element);
  this.detailsEvent.emit(element);
}
*/

}


