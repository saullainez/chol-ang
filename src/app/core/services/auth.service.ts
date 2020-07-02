import { Injectable } from '@angular/core';
import { GlobalService } from '../services/global.service';
import { Session } from '../models/session';


@Injectable({
  providedIn: 'root'
})
export class AuthService extends GlobalService {

    /**
   * Loguea y obtiene el token de acceso
   * @param username nombre de usuario
   * @param pass contraseña
   */
  login(username: string, pass: string) {
    return this.httpClient.post(this.globalclass.uri_api + 'login', {
      username: username,
      password: pass,
    }, this.options);
  }  
  
  /**
   * Cerrar sesión
   * @param session sesión activa
   */
  logout(session: Session) {
    return this.httpClient.post(this.globalclass.uri_api + 'logout', session, this.options);
  }
}
