import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from '../../core/services/auth.service';
import { StorageService } from '../../core/services/storage.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  @BlockUI() blockUI: NgBlockUI;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver, 
    private authService: AuthService,
    private storageService: StorageService) {}

  logout(){
    this.blockUI.start("Cerrando sesión");
    this.authService.logout(this.storageService.getCurrentSession()).subscribe((res:any) => {
      this.blockUI.stop();
      this.storageService.logout();
    }, (err:any) => {
      this.blockUI.stop();
      console.log(err);
    })
  }

}
