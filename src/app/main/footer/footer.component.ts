import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../core/services/storage.service';
import { SysParam } from '../../core/models/sys-param';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  year: number = 0;
  version: string;
  app_name: string;
  sys_param: SysParam;

  constructor(
    private storageService: StorageService
  ) { 
    this.sys_param = this.storageService.getSysParam();
    this.year = new Date().getFullYear();
    this.version = this.sys_param.version;
    this.app_name = this.sys_param.app_name;
  }

  ngOnInit(): void {
  }

}
