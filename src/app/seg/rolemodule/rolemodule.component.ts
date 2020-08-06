import { Component, OnInit, ViewChild } from '@angular/core';
import { RolModule } from '../interfaces/rol-module';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { SegService } from '../services/seg.service';
import { SnackComponent } from '../../core/snack/snack.component';
import { Globalclass } from '../../core/models/globalclass';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DatatableComponent } from '../../components/datatable/datatable.component';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Observable } from 'rxjs';
import { Role } from '../interfaces/role';
import { CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop'; 

@Component({
  selector: 'app-rolemodule',
  templateUrl: './rolemodule.component.html',
  styleUrls: ['./rolemodule.component.scss']
})
export class RolemoduleComponent implements OnInit {
  role_module: RolModule[];
  maintenance: boolean = false;
  @BlockUI() blockUI: NgBlockUI;
  @ViewChild(DatatableComponent) datatable: DatatableComponent;
  media$: Observable<MediaChange[]>;
  searchRole : string;
  searchEnd: boolean = false;
  roles : Role[];

  toAssing = [];
  assigned = [];

  Columns = [
    { def: 'id', header: 'Id', cell: (row: RolModule) => `${row.id}` },
    { def: 'module_name', header: 'Módulo', cell: (row: RolModule) => `${row.module_name}` },
    { def: 'rol_name', header: 'Rol', cell: (row: RolModule) => `${row.rol_name}` }
  ];

  constructor(
    public segService: SegService,
    private snackBar: MatSnackBar,
    private globalclass: Globalclass,
    media: MediaObserver
  ) { }

  ngOnInit(): void {
    this.getRoleModule(false);
    this.getRoles();
  }

  new(event){
    this.maintenance = true;
  }

  delete(id:number){

  }

  error(message:string, errStatus?:string, errstatusText?:string){
    this.blockUI.stop();
    const errMessage = errStatus  && errstatusText ? message + ' ' + errStatus + ' ' + errstatusText : message;
    this.snackBar.openFromComponent(SnackComponent, 
      {data: errMessage + this.globalclass.snackMsjError, duration: this.globalclass.snackDuration, horizontalPosition: 'center', panelClass: [this.globalclass.snackError]});
  }

  success(message:String){
    this.blockUI.stop();
    this.snackBar.openFromComponent(SnackComponent, 
      {data: message + this.globalclass.snackMsjSuccess, duration: this.globalclass.snackDuration, horizontalPosition: 'center', panelClass: [this.globalclass.snackSuccess]});
  }

  getRoleModule(reload:boolean){
    this.blockUI.start("Cargando datos de las opciones de menú")
    this.segService.getRoleModule().subscribe((data:any) => {
      this.role_module = data['role_module'];
      if(reload){
        this.datatable.refresh(this.role_module);
      }
      
      this.blockUI.stop();
    }, (err:any) => {
      this.error('Error :', err.status, err.statusText);
    })
  }

  back(){
    this.maintenance = false;
    this.searchRole = '';
    this.searchEnd = false;
  }

  getRoles(){
    this.segService.getRolesSelect().subscribe((data:any) => {
      this.roles = data['roles'];
    }, (err:any)=>{
      this.error('Error :', err.status, err.statusText);
    })
  }

  public GetValue(event: any, variable: string) {
    this[variable] = event;
  }

  public ValueKey(event: any, variable: string) {
    this[variable] = event.target.value;
  }

  disabledSearchButton(){
    return this.searchRole != undefined  ? true : false;
  }

  search(){
    this.blockUI.start('Buscando los permisos');
    this.segService.getPermissionRoleModule(this.searchRole).subscribe((data:any) => {
      this.toAssing = data['role_moduleNA'].map(this.globalclass.getDragDropDesc);
      this.assigned = data['role_moduleA'].map(this.globalclass.getDragDropDesc);
      this.searchEnd = true;
      this.blockUI.stop();
    }, (err:any) => {
      this.error('Error: ', err.status, err.statusText);
    })
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  save(){
    this.blockUI.start('Guardando los permisos');
    const assignedSend = this.assigned.map(this.globalclass.extractIds);
    const toAssingSend = this.toAssing.map(this.globalclass.extractIds);
    this.segService.saveRoleModule(this.searchRole, toAssingSend, assignedSend).subscribe((data:any) => {
      this.success(data['message']);
      this.getRoleModule(true);
      this.back();

    }, (err:any) => {
      this.error('Se ha producido un error al guardar los permisos');
    })
  }

}
