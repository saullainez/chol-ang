import { Injectable } from '@angular/core';
import { GlobalService } from '../../core/services/global.service';
import { Module } from '../../select-module/interfaces/module';

@Injectable({
  providedIn: 'root'
})
export class ModuleService extends GlobalService {
  getModules() {
    return this.httpClient.get(this.globalclass.uri_api + 'modules', this.options);
  }
}
