import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-datatable-configurable',
  templateUrl: './datatable-configurable.component.html',
  styleUrls: ['./datatable-configurable.component.scss']
})
export class DatatableConfigurableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @Input() columns: any; //recibe las columnas del datatable
  @Input() data: any; //recibe los datos del datatable

  @Output() updateElement = new EventEmitter<any>();

  //datos del datatable
  dataSource:any;
  //encabezado del datatable
  displayedColumns: any;

  constructor() { }

  ngOnInit(): void {
    this.displayedColumns = this.columns.map(x=>x.def);
    this.dataSource = new MatTableDataSource(this.data);
  }

  ngAfterViewInit (): void {
    //this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  update(element: any, column: any, data: any) {
    if (data == null) { return; }
    element[column] = data;
    this.updateElement.emit(element);
  }

}
