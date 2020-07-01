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

@Component({
  selector: 'app-select-module',
  templateUrl: './select-module.component.html',
  styleUrls: ['./select-module.component.scss']
})
export class SelectModuleComponent implements OnInit {
  modules: Module;
  private moduleSession: ModuleSession = new ModuleSession();
  media$: Observable<MediaChange[]>;
  centered = false;
  disabled = false;
  unbounded = false;

  radius: number = 150;
  color: string = "rgb(83, 109, 145)";

  constructor(
    private moduleService : ModuleService,
    private snackBar: MatSnackBar,
    private globalclass: Globalclass, 
    media: MediaObserver,
    private storageService: StorageService,
    private router: Router
  ) {
    this.media$ = media.asObservable();
   }

  ngOnInit() {
    this.moduleService.getModules().subscribe((data: any) => {
      this.modules = data;
    },(err:any) => {
      this.snackBar.openFromComponent(SnackComponent, 
        {data: err + this.globalclass.snackMsjError, duration: this.globalclass.snackDuration, horizontalPosition: 'center', panelClass: [this.globalclass.snackError]});
    })
  }

  goToModule(uri: string, moduleName: string, moduleDescription: string){
    this.moduleSession.uri = uri;
    this.moduleSession.name = moduleName;
    this.moduleSession.description = moduleDescription;
    this.storageService.setModuleSession(this.moduleSession);
    this.router.navigateByUrl(uri);
  }

}
