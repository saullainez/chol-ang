import { Injectable } from '@angular/core';
import { GlobalService } from 'src/app/core/services/global.service';

@Injectable({
  providedIn: 'root'
})
export class SegService extends GlobalService {
  //SALG obtiene la información para el dashboard
  getDashInfo(){
    return this.httpClient.get(this.globalclass.uri_api + 'seg/dash_info', this.options);
  }

  //SALG obtiene la información del usuario
  getUserInfo(){
    return this.httpClient.get(this.globalclass.uri_api + 'seg/users', this.options);
  }

  //SALG Desactivar usuario
  deactivateUser(id:number){
    return this.httpClient.delete(this.globalclass.uri_api + 'seg/users/' + id, this.options)
  }
}
