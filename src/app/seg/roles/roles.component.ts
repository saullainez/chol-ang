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
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {
  
  edit:boolean = false;
  @ViewChild(DatatableComponent) datatable: DatatableComponent;

  //variable para declarar un formulario
  public roleForm: FormGroup;
  //variable para el snackbar (barra inferior)
  @BlockUI() blockUI: NgBlockUI;

  //variable que define si se muetra el componente del mantenimiento
  maintenance :boolean =false;
  roles : Role[];
  idRole : number;
  media$: Observable<MediaChange[]>;
  role : Role;
  username : string ='';

  //aun no se que hace

  changeDatatable : boolean = false;

  Columns = [
    { def: 'id', header: 'Id', cell: (row: Role) => `${row.id}` },
    { def: 'prefix', header: 'Prefijo', cell: (row: Role) => `${row.prefix}` },
    { def: 'name', header: 'Nombre', cell: (row: Role) => `${row.name}` },
    { def: 'description', header: 'Descripcion', cell: (row: Role) => `${row.description}` },
  ];


  //constructor para inicializar los servicios necesarios del componente.
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
  


  //muestra el mensaje de error, interesante estructura
  error(message:string, errStatus?:string, errstatusText?:string){
    this.blockUI.stop();
    const errMessage = errStatus && errstatusText ? message + ' ' + errStatus + ' ' + errstatusText : message;
    this.snackBar.openFromComponent(SnackComponent, 
      {data: errMessage + this.globalclass.snackMsjError, duration: this.globalclass.snackDuration, horizontalPosition: 'center', panelClass: [this.globalclass.snackError]});
  }

  //muestra el mensaje de que procedio correctamente
  //maneja la misma estructura del anterior, cambiando un par de variables. (podria manejarse dentro del mismo metodo, aunque este solo recibe un parametro)
  success(message:String){
    this.blockUI.stop();
    this.snackBar.openFromComponent(SnackComponent, 
      {data: message + this.globalclass.snackMsjSuccess, duration: this.globalclass.snackDuration, horizontalPosition: 'center', panelClass: [this.globalclass.snackSuccess]});
  }

//estoy inicializando la interfaz
  ngOnInit(): void {

    this.idRole = this.activatedRoute.snapshot.params['id'];
    this.username = this.segService.storageService.getUserSession();


    if (this.idRole){
      this.edit = true;
      this.blockUI.start('Cargando los datos del rol');
      this.segService.getRoleData(this.idRole).subscribe((data:any) => {
        if(data["success"] == true){
          this.role = data["role"];
          this.maintenance = true;
          this.blockUI.stop();
        }
      }, (err:any) => {
        this.error('Error :', err.status, err.statusText);
      })
    }else{
      this.onInitrole();
      this.blockUI.start("Cargando datos de los roles");
      this.loadRoles(false);
      this.edit = false;
    }
    
    this.initRoleForm();

  }

  onInitrole():void {
    
    this.role = {
      id : null,
      prefix : null,
      name: null,
      description : null,
      created_by : null
    }

  }
  delete(id) {

    const dialogRef = this.dialog.open(DialogConfirmComponent, {data:{title:'Eliminar Rol', text:'¿Está seguro de eliminar este rol?'}});
    dialogRef.afterClosed().subscribe(result => {
      if (result == true){
        this.blockUI.start("Eliminando Rol");
        this.segService.deactivateRole(id).subscribe((data:any) => {
         if(data["success"] = true){
           this.datatable.refresh(data["roles"]);
           this.roles = data["roles"];
           this.success('Rol eliminado correctamente');
         }
        }, (err:any) => {
          this.error('Ocurrió un error al eliminar el rol');
        })
      }

     });




  }

  //este evento lo que hace es ocultar el datatable y muestra el manteniento
  new(event) {
    this.maintenance = true;
  }

  
  initRoleForm(){
    this.roleForm = new FormGroup({
      'nameFormControl': new FormControl('', [Validators.required]),
      'roleFormControl' : new FormControl('', [Validators.required, Validators.required]),
      'prefixFormControl' : new FormControl('', [Validators.required])
    });
  }

  save(){

    this.blockUI.start('Guardando el rol');
    if (this.edit){
     
      this.segService.editRole(this.role).subscribe((data:any) => {
        this.success(data['message']);
      }, (err:any) => {
        this.error('Ocurrió un error al actualizar el rol');
      });
      this.blockUI.stop();
    }
    else{
      
      
      this.role.created_by = this.username;
      this.segService.saveRole(this.role).subscribe((data:any)=>{
        if (data['roleError']){
          this.error(data['message']);
        }
        else{
          this.success(data['message']);
          this.back();
        }
      },(err:any)=>{
        this.error('Ocurrió un error al guardar el rol')
      })
    }
  }

  disabledSaveButton(){
    return this.roleForm.valid;
  }

  getErrorRequiredMessage(formControl:any, input:any) {
    if (this.roleForm.get(formControl).hasError('required')) {
      return 'El campo' + input + ' es requerido';
    }
  }

  
  back(){
    this.maintenance = false;
    this.router.navigateByUrl('seg/roles');
    if(!this.edit){
      this.loadRoles(!this.edit);
    }
  }

  loadRoles(reload:boolean){

    this.segService.getRolesInfo().subscribe((data:any) => {
      this.roles = data['roles'];
      if(reload){
        this.datatable.refresh(this.roles);
      }else{
        this.blockUI.stop();
      }
    }, (err:any) => {
      this.error('Ocurrió un error al cargar los roles');
    })
  }






  

}
