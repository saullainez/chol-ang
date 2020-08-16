import { Component, OnInit, ViewChild } from '@angular/core';
import { SegService } from '../services/seg.service';
import { PermissionMenu } from '../interfaces/permission-menu';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackComponent } from '../../core/snack/snack.component';
import { Globalclass } from '../../core/models/globalclass';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Observable } from 'rxjs';
import { CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop'; 
import { Role } from '../interfaces/role';
import { Module } from '../interfaces/module';
import { DatatableComponent } from '../../components/datatable/datatable.component';

@Component({
  selector: 'app-permission-menu',
  templateUrl: './permission-menu.component.html',
  styleUrls: ['./permission-menu.component.scss']
})
export class PermissionMenuComponent implements OnInit {
  permissions_menu: PermissionMenu[];
  edit: boolean = false;
  maintenance: boolean = false;
  @BlockUI() blockUI: NgBlockUI;
  media$: Observable<MediaChange[]>;
  roles : Role[];
  modules: Module[];
  searchRole : string;
  searchModule: string;
  searchEnd: boolean = false;
  @ViewChild(DatatableComponent) datatable: DatatableComponent;

  toAssing = [];
  assigned = [];

  Columns = [
    { def: 'id', header: 'Id', cell: (row: PermissionMenu) => `${row.id}` },
    { def: 'module', header: 'Módulo', cell: (row: PermissionMenu) => `${row.module}` },
    { def: 'role', header: 'Rol', cell: (row: PermissionMenu) => `${row.role}` },
    { def: 'menu_desc', header: 'Menú', cell: (row: PermissionMenu) => `${row.menu_desc}` },
    { def: 'sub_menu_desc', header: 'Sub menú', cell: (row: PermissionMenu) => `${row.sub_menu_desc}` }
  ];

  constructor(
    public segService: SegService,
    private snackBar: MatSnackBar,
    private globalclass: Globalclass,
    media: MediaObserver
  ) { }

  ngOnInit(): void {
    this.getPermissionMenu(false);
    this.getRoles();
    this.getModules();
  }

  getPermissionMenu(reload:boolean){
    this.blockUI.start("Cargando datos de las opciones de menú")
    this.segService.getPermissionMenu().subscribe((data:any) => {
      this.permissions_menu = data['permissions_menu'];
      if(reload){
        this.datatable.refresh(this.permissions_menu);
      }
      
      this.blockUI.stop();
    }, (err:any) => {
      this.error('Error :', err.status, err.statusText);
    })
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

  back(){
    this.maintenance = false;
    this.searchRole = '';
    this.searchModule = '';
    this.searchEnd = false;
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

  public GetValue(event: any, variable: string) {
    this[variable] = event;
  }

  public ValueKey(event: any, variable: string) {
    this[variable] = event.target.value;
  }

  getRoles(){
    this.segService.getRolesSelect().subscribe((data:any) => {
      this.roles = data['roles'];
    }, (err:any)=>{
      this.error('Error :', err.status, err.statusText);
    })
  }

  getModules(){
    this.segService.getModulesSelect().subscribe((data:any) => {
      this.modules = data['modules'];
    }, (err:any)=>{
      this.error('Error :', err.status, err.statusText);
    })
  }

  search(){
    this.blockUI.start('Buscando los permisos');
    this.segService.getPermissionMenuRoleModule(this.searchRole, this.searchModule).subscribe((data:any) => {
      this.toAssing = data['permissions_menuNA'].map(this.globalclass.getDragDropDesc);
      this.assigned = data['permissions_menuA'].map(this.globalclass.getDragDropDesc);
      this.searchEnd = true;
      this.blockUI.stop();
    }, (err:any) => {
      this.error('Error: ', err.status, err.statusText);
    })
  }
  
  disabledSearchButton(){
    return this.searchRole != undefined && this.searchModule != undefined  ? true : false;
  }

  save(){
    this.blockUI.start('Guardando los permisos');
    const assignedSend = this.assigned.map(this.globalclass.extractIds);
    const toAssingSend = this.toAssing.map(this.globalclass.extractIds);
    this.segService.savePermissionMenu(this.searchRole, this.searchModule, toAssingSend, assignedSend).subscribe((data:any) => {
      this.success(data['message']);
      this.getPermissionMenu(true);
      this.back();

    }, (err:any) => {
      this.error('Se ha producido un error al guardar los permisos');
    })
  }

}
