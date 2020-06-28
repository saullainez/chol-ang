import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {


  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );

  Columns = [
    { def: 'name', header: 'Nombre', cell: (row: PeriodicElement) => `${row.name}` },
    { def: 'position', header: 'Posición', cell: (row: PeriodicElement) => `${row.position}` },
    { def: 'weight', header: 'Tamaño', cell: (row: PeriodicElement) => `${row.weight}` },
    { def: 'symbol', header: 'Simbolo', cell: (row: PeriodicElement) => `${row.symbol}` },
    { def: 'rol', header: 'Rol', cell: (row: PeriodicElement) => `${row.rol}` }
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

  constructor(private breakpointObserver: BreakpointObserver) {
    //console.log("G");
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  rol?: string;
}
