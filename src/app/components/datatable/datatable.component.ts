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
  @Input() columns: any; //recibe las columnas del datatable
  @Input() data: any; //recibe los datos del datatable
  @Input() showFilter = true; //recibe true o false si se desea ver el filtro de busqueda
  @Input() btnCreate = true; //true o false para ver la opcion de crear
  @Input() btnEdit = true; //true o false para ver la opcion de editar
  @Input() btnDelete = true; //true o false para ver la opcion de eliminar
  @Input() url: string; //ruta de edición
  @Output() multipleKey = false; //disparador de eventos para eliminar

  //Parametros de salida

  @Output() DeleteEvent = new EventEmitter<any>();
  @Output() CreateEvent = new EventEmitter<any>();
  @Output() EditEvent = new EventEmitter<any>();

  @Output() Previous = new EventEmitter<any>();

  dataSource:any;//datos del datatable
  displayedColumns: any;//encabezado del datatable


  constructor(public router:Router) {
   }

  ngOnInit(): void {
    this.displayedColumns = this.columns.map(x=>x.def);
    this.dataSource = new MatTableDataSource(this.data);
    if (this.btnEdit) { this.displayedColumns.push('edit'); }
    if (this.btnDelete) { this.displayedColumns.push('delete'); }
  }

  ngAfterViewInit (): void {
    //this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  //funcion que retorna el elemento a eliminar del datatable
  public delete = (element: any) => {
    const keys = Object.keys(element);
    if (!this.multipleKey) {
      this.DeleteEvent.emit(element[keys[0]]);
    } else {
      this.DeleteEvent.emit(element);
    }
  }


  //funcion que se dispara al crear un nuevo elemento
  create() {
    this.CreateEvent.emit();
  }


  //redirecciona el id de la fila a otra url
  public EditUrl = (element: any) => {
    const keys = Object.keys(element);
    this.url = this.url + '/' + element[keys[0]];
    this.router.navigate([this.url]);
  }


  //funcion que retorna el elemento a editar del datatable
  public Edit = (element: any) => {
    const keys = Object.keys(element);
    this.EditEvent.emit(element);
  }

refresh(data:any) {
  this.dataSource = new MatTableDataSource(data);
}


}


