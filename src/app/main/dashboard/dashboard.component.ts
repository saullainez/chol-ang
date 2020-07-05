import { Component, ViewChild, OnInit } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import {MatDialog} from '@angular/material/dialog';
import { DialogConfirmComponent } from '../../components/dialog-confirm/dialog-confirm.component';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  mainForm: FormGroup;

  valueautocomplete:any;
  valueselect:any;
  optionsautocomplete: any;
  optionsselect:any;

  Columns = [
    { def: 'name', header: 'Nombre', cell: (row: PeriodicElement) => `${row.name}` },
    { def: 'position', header: 'Posición', cell: (row: PeriodicElement) => `${row.position}` },
    { def: 'weight', header: 'Tamaño', cell: (row: PeriodicElement) => `${row.weight}` },
    { def: 'symbol', header: 'Simbolo', cell: (row: PeriodicElement) => `${row.symbol}` },
    { def: 'rol', header: 'Rol', cell: (row: PeriodicElement) => `${row.rol}` }
  ];

  ColumnsConfigurable = [
    { type:'input', def: 'name', header: 'Nombre', cell: (row: PeriodicElement) => `${row.name}` },
    { type:'input', def: 'position', header: 'Posición', cell: (row: PeriodicElement) => `${row.position}` },
    { type:'input', def: 'weight', header: 'Tamaño', cell: (row: PeriodicElement) => `${row.weight}` },
    { type:'input', def: 'symbol', header: 'Simbolo', cell: (row: PeriodicElement) => `${row.symbol}` },
    { type:'input', def: 'rol', header: 'Rol', cell: (row: PeriodicElement) => `${row.rol}` }
  ];

  data: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', rol:'Admin'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', rol:'Maestro'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', rol:'Admin'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', rol:'Admin'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B', rol:'Maestro'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', rol:'Admin'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', rol:'Admin'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', rol:'Maestro'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', rol:'Maistro'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];

  constructor(private breakpointObserver: BreakpointObserver, public dialog: MatDialog) {
    //console.log("G");
  }

  ngOnInit(): void {
    this.optionsautocomplete = ['One', 'Two', 'Three', 'Four', 'Five'];
    this.optionsselect = [
      {value: '1', description: 'Steak'},
      {value: '2', description: 'Pizza'},
      {value: '3', description: 'Tacos'}
    ];
  }

  //FUNCIONES NECESARIAS PARA DATATABLE
  delete(id) {
    const dialogRef = this.dialog.open(DialogConfirmComponent, {data:{title:'Prueba',text:'Texto de prueba'}});
    dialogRef.afterClosed().subscribe(result => {
       console.log(id);
     });
  }

  new(event) {
    console.log(event);
    console.log("NUEVO ELEMENTO");
  }

  //FUNCIONES NECESARIAS PARA AUTOCOMPLETE
  public ValueSelectAutocomplete(event: any, valtemp: string) {
    this[valtemp] = event;
    console.log(this[valtemp]);
  }

  public ValueKey(event: any, valtemp: string) {
    this[valtemp] = event.target.value;
    console.log(this[valtemp]);
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  rol?: string;
}
