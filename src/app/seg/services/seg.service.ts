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
}
