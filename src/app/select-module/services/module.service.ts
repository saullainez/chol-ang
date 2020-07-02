import { Injectable } from '@angular/core';
import { GlobalService } from '../../core/services/global.service';
import { Module } from '../../select-module/interfaces/module';

@Injectable({
  providedIn: 'root'
})
export class ModuleService extends GlobalService {
  //SALG obtiene todos los módulos
  getModules() {
    return this.httpClient.get(this.globalclass.uri_api + 'modules', this.options);
  }

  //SALG obtiene los módulos según el rol
  getUserModules(role:string) {
    return this.httpClient.get(this.globalclass.uri_api + 'modules/' + role, this.options);
  }
}
