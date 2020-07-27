import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../interfaces/user';
import { SegService } from '../services/seg.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackComponent } from '../../core/snack/snack.component';
import { Globalclass } from '../../core/models/globalclass';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { DialogConfirmComponent } from '../../components/dialog-confirm/dialog-confirm.component';
import {MatDialog} from '@angular/material/dialog';
import { DatatableComponent } from '../../components/datatable/datatable.component';
import { Router, ActivatedRoute } from '@angular/router';
import {MediaChange, MediaObserver} from '@angular/flex-layout';
import {Observable} from 'rxjs';
import { Role } from '../interfaces/role';
import {FormControl, Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  edit: boolean = false;
  /*emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  nameFormControl = new FormControl('', [Validators.required]);
  usernameFormControl = new FormControl({value:'', disabled:this.disabledUsername()}, [Validators.required]);*/
  public userForm: FormGroup;
  media$: Observable<MediaChange[]>;
  @BlockUI() blockUI: NgBlockUI;
  @ViewChild(DatatableComponent) datatable: DatatableComponent;
  users : User[];
  roles : Role[];
  rolPrefix : string;
  user: User;
  maintenance: boolean = false;
  idUser: number;
  
  changeDatatable : boolean = false;
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
    private dialog: MatDialog,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    media: MediaObserver
  ) { 
    this.media$ = media.asObservable();
  }

  ngOnInit(): void {

    this.getRoles();
    this.idUser = this.activatedRoute.snapshot.params['id'];
    if(this.idUser) {
      this.edit = true;
      this.blockUI.start("Cargando datos del usuario");
      this.segService.getUserData(this.idUser).subscribe((data:any) => {
        if(data["success"] == true){
          this.user = data["user"];
          this.rolPrefix = this.user.role_prefix;
          this.maintenance = true;
          this.blockUI.stop();
        }
      }, (err:any) => {
        this.error('Error :', err.status, err.statusText);
      })
    }else {
      this.edit = false;
      this.onInitUser();
      this.blockUI.start("Cargando datos de los usuarios");
      this.loadUsers(false);
    }

    this.initUserForm();

  }

  delete(id) {
    const dialogRef = this.dialog.open(DialogConfirmComponent, {data:{title:'Eliminar usuario', text:'¿Está seguro de eliminar este usuario?'}});
    dialogRef.afterClosed().subscribe(result => {
      if (result == true){
        this.blockUI.start("Eliminando usuario");
        this.segService.deactivateUser(id).subscribe((data:any) => {
         if(data["success"] = true){
           this.datatable.refresh(data["users"]);
           this.users = data["users"];
           this.success('Usuario eliminado correctamente');
         }
        }, (err:any) => {
          this.error('Ocurrió un error al eliminar el usuario');
        })
      }

     });
  }

  loadUsers(reload:boolean){

    this.segService.getUsersInfo().subscribe((data:any) => {
      this.users = data['users'];
      if(reload){
        this.datatable.refresh(this.users);
      }else{
        this.blockUI.stop();
      }
    }, (err:any) => {
      this.error('Ocurrió un error al cargar los usuarios');
    })
  }

  new(event) {
    this.maintenance = true;
  }

  onInitUser():void{
    this.user = {
      id: null,
      name: null,
      email: null,
      username: null,
      role_prefix: null
    }
  }

  error(message:string, errStatus?:string, errstatusText?:string){
    this.blockUI.stop();
    const errMessage = errStatus && errstatusText ? message + ' ' + errStatus + ' ' + errstatusText : message;
    this.snackBar.openFromComponent(SnackComponent, 
      {data: errMessage + this.globalclass.snackMsjError, duration: this.globalclass.snackDuration, horizontalPosition: 'center', panelClass: [this.globalclass.snackError]});
  }

  success(message:String){
    this.blockUI.stop();
    this.snackBar.openFromComponent(SnackComponent, 
      {data: message + this.globalclass.snackMsjSuccess, duration: this.globalclass.snackDuration, horizontalPosition: 'center', panelClass: [this.globalclass.snackSuccess]});
  }

  save(){
    this.blockUI.start('Guardando el usuario');
    if (this.edit){
      this.segService.edituser(this.user, this.rolPrefix).subscribe((data:any) => {
        this.success(data['message']);
      }, (err:any) => {
        this.error('Ocurrió un error al actualizar el usuario');
      })
    }else{
      this.segService.saveUser(this.user, this.rolPrefix).subscribe((data:any) => {
        if(data['userError']){
          this.error(data['message']);
        }else{
          this.success(data['message']);
          this.back();
        }
      }, (err:any) => {
        this.error('Ocurrió un error al guardar el usuario');
      })
    }
  }

  back(){
    this.maintenance = false;
    this.router.navigateByUrl('seg/users');
    if(!this.edit){
      this.loadUsers(!this.edit);
    }
  }

  getRoles(){
    this.segService.getRolesSelect().subscribe((data:any) => {
      this.roles = data['roles'];
    }, (err:any)=>{
      this.error('Error :', err.status, err.statusText);
    })
  }

  public GetValue(event: any, rolPrefix: string) {
    this[rolPrefix] = event;
  }

  public ValueKey(event: any, rolPrefix: string) {
    this[rolPrefix] = event.target.value;
  }

  getErrorEmailMessage() {
    if (this.userForm.get('emailFormControl').hasError('required')) {
      return 'El Correo electrónico es requerido';
    }

    return this.userForm.get('emailFormControl').hasError('email') ? 'El correo electrónico es inválido' : '';
  }

  getErrorRequiredMessage(formControl:any, input:any) {
    if (this.userForm.get(formControl).hasError('required')) {
      return 'El ' + input + ' es requerido';
    }
  }

  initUserForm(){
    this.userForm = new FormGroup({
      'usernameFormControl': new FormControl({value:'', disabled:this.edit}, [Validators.required]),
      'emailFormControl' : new FormControl('', [Validators.required, Validators.email]),
      'nameFormControl' : new FormControl('', [Validators.required])
    });
  }

  disabledSaveButton(){
    return this.userForm.valid && this.rolPrefix != undefined ? true : false;
  }




}
