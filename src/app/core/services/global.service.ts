import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Globalclass } from '../models/globalclass';

@Injectable({
  providedIn: 'root'
})

export class GlobalService {
  public options: any;
  public headers = new HttpHeaders({
    Accept: 'application/json',
    'Content-Type': 'application/json'
  });

  constructor(public globalclass: Globalclass, public httpClient: HttpClient) {
    this.options = {
      headers: this.headers
    };
   }
}
