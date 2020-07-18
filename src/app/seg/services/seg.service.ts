import { Injectable } from '@angular/core';
import { GlobalService } from 'src/app/core/services/global.service';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class SegService extends GlobalService {
  //SALG obtiene la información para el dashboard
  getDashInfo(){
    return this.httpClient.get(this.globalclass.uri_api + 'seg/dash_info', this.options);
  }

  //SALG Desactivar usuario
  deactivateUser(id:number){
    return this.httpClient.delete(this.globalclass.uri_api + 'seg/users/' + id, this.options)
  }

  //SALG Obtener información de un usuario
  getUserData(id: number){
    return this.httpClient.get(this.globalclass.uri_api + 'seg/user/' + id, this.options);
  }

  saveUser(user:User, rolPrefix:string){
    return this.httpClient.post(this.globalclass.uri_api + 'seg/users', {user, rolPrefix}, this.options)
  }

  edituser(user:User, rolPrefix:string){
    return this.httpClient.put(this.globalclass.uri_api + 'seg/users', {user, rolPrefix}, this.options);
  }
}
