import { Component, OnInit } from '@angular/core';
import {MediaChange, MediaObserver} from '@angular/flex-layout';
import {Observable} from 'rxjs';
import { SegService } from '../services/seg.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackComponent } from '../../core/snack/snack.component';
import { Globalclass } from '../../core/models/globalclass';
import { Dashboard } from '../interfaces/dashboard';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  media$: Observable<MediaChange[]>;
  @BlockUI() blockUI: NgBlockUI;
  public dashboard: Dashboard;


  constructor(
    media: MediaObserver,
    private segService : SegService,
    private snackBar: MatSnackBar,
    private globalclass: Globalclass
  ) {
    this.media$ = media.asObservable();
   }

  ngOnInit(): void {
    this.initDash();
    this.loadDashInfo();
  }

  initDash(): void {
    this.dashboard = {
      usersCount: 0,
      rolesCount: 0,
      modulesCount: 0,
      rolModulesCount: 0
    }
  }

  loadDashInfo(): void {
    this.blockUI.start('Cargando información del dashboard');
    this.segService.getDashInfo().subscribe((data : any) => {
      this.dashboard = data;
      this.blockUI.stop();
    }, (err : any) => {
      this.blockUI.stop();
      this.snackBar.openFromComponent(SnackComponent, 
        {data: 'Error : ' + err.status + ' ' + err.statusText + this.globalclass.snackMsjError, duration: this.globalclass.snackDuration, horizontalPosition: 'center', panelClass: [this.globalclass.snackError]});
    })
  }

}
