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

  //SALG Guardar usuario
  saveUser(user:User, rolPrefix:string){
    return this.httpClient.post(this.globalclass.uri_api + 'seg/users', {user, rolPrefix}, this.options)
  }

  //SALG Editar usuario
  edituser(user:User, rolPrefix:string){
    return this.httpClient.put(this.globalclass.uri_api + 'seg/users', {user, rolPrefix}, this.options);
  }

  //SALG obtener todos los permisos a opciones de menú
  getPermissionMenu(){
    return this.httpClient.get(this.globalclass.uri_api + 'seg/permission_menu', this.options);
  }

  //SALG obtener las opciones de menú según el rol y el módulo
  getPermissionMenuRoleModule(role:string, module:string){
    return this.httpClient.get(this.globalclass.uri_api + 'seg/permission_menu_role_module/' + role + '/' + module, this.options);
  }

  //SALG guardar las opciones de menú
  savePermissionMenu(role:string, module:string, toAssing: any, assigned: any){
    const user = this.storageService.getCurrentSession().username;
    return this.httpClient.post(this.globalclass.uri_api + 'seg/permission_menu', {role, module, toAssing, assigned, user}, this.options);
  }

  //SALG obtener todos los permisos de módulos a roles
  getRoleModule(){
    return this.httpClient.get(this.globalclass.uri_api + 'seg/role_module', this.options);
  }

  //SALG obtener los permisos de módulos a roles según el rol
  getPermissionRoleModule(role:string){
    return this.httpClient.get(this.globalclass.uri_api + 'seg/permission_role_module/' + role, this.options);
  }

  //SALG guardar los permisos a módulos para un rol
  saveRoleModule(role:string, toAssing: any, assigned: any){
    const user = this.storageService.getCurrentSession().username;
    return this.httpClient.post(this.globalclass.uri_api + 'seg/role_module', {role, toAssing, assigned, user}, this.options);
  }
}
