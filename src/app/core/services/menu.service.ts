import { Injectable } from '@angular/core';
import { GlobalService } from '../services/global.service';

@Injectable({
  providedIn: 'root'
})
export class MenuService extends GlobalService {
  getMenu(){
    const module = this.storageService.getCurrentModuleName();
    const role = this.storageService.getUserRole();
    return this.httpClient.get(this.globalclass.uri_api + 'seg/menu_permission/' + module + '/' + role, this.options);
  }

}
