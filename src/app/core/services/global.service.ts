import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Globalclass } from '../models/globalclass';
import { StorageService } from '../services/storage.service';

@Injectable({
  providedIn: 'root'
})

export class GlobalService {
  public options: any;
  public headers = new HttpHeaders({
    Accept: 'application/json',
    'Content-Type': 'application/json'
  });

  constructor(
    public globalclass: Globalclass, 
    public httpClient: HttpClient,
    public storageService: StorageService
    ) {
    this.options = {
      headers: this.headers
    };
   }

  //SALG obtiene la información de los usuarios
  getUsersInfo(){
    return this.httpClient.get(this.globalclass.uri_api + 'seg/users', this.options);
  }

  //SALG obtiene información de los roles
  getRolesInfo(){
    return this.httpClient.get(this.globalclass.uri_api + 'seg/roles', this.options);
  }

  //SALG obtiene información de los roles para el select
  getRolesSelect(){
    return this.httpClient.get(this.globalclass.uri_api + 'seg/roles-select', this.options);
  }
}
