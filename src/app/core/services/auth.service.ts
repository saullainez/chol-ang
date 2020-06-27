import { Injectable } from '@angular/core';
import { GlobalService } from '../services/global.service';
import { Session } from '../models/session';


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
      email: email,
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
