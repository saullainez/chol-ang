import { Component, OnInit } from '@angular/core';
import { Module } from "./interfaces/module";
import { ModuleService } from './services/module.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackComponent }  from '../core/snack/snack.component';
import { Globalclass } from '../core/models/globalclass';
import {MediaChange, MediaObserver} from '@angular/flex-layout';
import {Observable} from 'rxjs';
import { ModuleSession } from '../core/models/module-session';
import { StorageService } from '../core/services/storage.service';
import { Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';
import { Rolemodule } from '../core/models/rolemodule';
import { BlockUI, NgBlockUI } from 'ng-block-ui';


@Component({
  selector: 'app-select-module',
  templateUrl: './select-module.component.html',
  styleUrls: ['./select-module.component.scss']
})
export class SelectModuleComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI;
  modules: Module;
  private moduleSession: ModuleSession = new ModuleSession();
  media$: Observable<MediaChange[]>;
  centered = false;
  disabled = false;
  unbounded = false;
  role: string;
  count: number;

  radius: number = 150;
  color: string = "rgb(83, 109, 145)";

  constructor(
    private moduleService : ModuleService,
    private snackBar: MatSnackBar,
    private globalclass: Globalclass, 
    media: MediaObserver,
    private storageService: StorageService,
    private router: Router,
    private authService: AuthService,
    private roleModule: Rolemodule
  ) {
    this.media$ = media.asObservable();
   }

  ngOnInit() {
    this.blockUI.start("Cargando módulos del usuario");
    this.role = this.storageService.getUserRole();
    this.moduleService.getUserModules(this.role).subscribe((data: any) => {
      this.modules = data;
      this.count = data.length;
      this.roleModule.prefix = this.role;
      this.roleModule.modules = data;
      this.storageService.setRoleModule(this.roleModule);
      this.blockUI.stop();
    },(err:any) => {
      this.blockUI.stop();
      this.snackBar.openFromComponent(SnackComponent, 
        {data: err + this.globalclass.snackMsjError, duration: this.globalclass.snackDuration, horizontalPosition: 'center', panelClass: [this.globalclass.snackError]});
    })
  }

  goToModule(uri: string, moduleName: string, moduleDescription: string){
    this.blockUI.start("Ingresando al módulo");
    this.moduleSession.uri = uri;
    this.moduleSession.name = moduleName;
    this.moduleSession.description = moduleDescription;
    this.storageService.setModuleSession(this.moduleSession);
    this.router.navigateByUrl(uri).finally(
      this.blockUI.stop
    );
  }

  logout(){
    this.blockUI.start("Cerrando sesión");
    this.authService.logout(this.storageService.getCurrentSession()).subscribe((res:any) => {
      this.blockUI.stop();
      this.storageService.logout();
    }, (err:any) => {
      this.blockUI.stop();
      console.log(err);
    })
  }

}
