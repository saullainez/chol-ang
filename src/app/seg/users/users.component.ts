import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { SegService } from '../services/seg.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackComponent } from '../../core/snack/snack.component';
import { Globalclass } from '../../core/models/globalclass';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { DialogConfirmComponent } from '../../components/dialog-confirm/dialog-confirm.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI;
  users : User[];
  Columns = [
    { def: 'id', header: 'Id', cell: (row: User) => `${row.id}` },
    { def: 'name', header: 'Nombre', cell: (row: User) => `${row.name}` },
    { def: 'email', header: 'Correo electrónico', cell: (row: User) => `${row.email}` },
    { def: 'role_prefix', header: 'Rol', cell: (row: User) => `${row.role_prefix}` },
    { def: 'username', header: 'Nombre de usuario', cell: (row: User) => `${row.username}` }
  ];

  constructor(
    public segService: SegService,
    private snackBar: MatSnackBar,
    private globalclass: Globalclass,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.blockUI.start("Cargando datos del usuario");
    this.segService.getUserInfo().subscribe((data:any) => {
      this.users = data['users'];
      this.blockUI.stop();
    }, (err:any) => {
      this.blockUI.stop();
      this.snackBar.openFromComponent(SnackComponent, 
        {data: 'Error : ' + err.status + ' ' + err.statusText + this.globalclass.snackMsjError, duration: this.globalclass.snackDuration, horizontalPosition: 'center', panelClass: [this.globalclass.snackError]});
    })
  }

  delete(id) {
    const dialogRef = this.dialog.open(DialogConfirmComponent, {data:{title:'Eliminar usuario',text:'¿Está seguro de eliminar este usuario?'}});
    dialogRef.afterClosed().subscribe(result => {
       console.log(id);
     });
  }

  new(event) {
    console.log(event);
    console.log("NUEVO ELEMENTO");
  }

}
