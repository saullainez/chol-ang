import { Injectable } from '@angular/core';
import { GlobalService } from '../services/global.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService extends GlobalService {

    /**
   * Loguea y obtiene el token de acceso
   * @param email correo electrónico
   * @param pass contraseña
   */
  login(email: string, pass: string) {
    return this.httpClient.post(this.globalclass.uri_api + 'login', {
      grant_type: 'password',
      client_id: '2',
      client_secret: '4eVnS5rRCp0IpiKsEloppD9GZrvH9EklOLyAth2C',
      username: email,
      password: pass,
      scope: ''
    }, this.options);
  }  
  
  /**
   * Cerrar sesión, eliminar el token de acceso
   */
  logout() {
    this.options.headers.Authorization = 'Bearer ' + localStorage.getItem('access_token');
    return this.httpClient.get(this.globalclass.uri_api + '/token/revoke', this.options);
  }
}
