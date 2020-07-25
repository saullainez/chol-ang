import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from '../../core/services/auth.service';
import { StorageService } from '../../core/services/storage.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { MenuService } from '../../core/services/menu.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackComponent } from '../../core/snack/snack.component';
import { Globalclass } from '../../core/models/globalclass';
import { Menu } from '../../core/interfaces/menu';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  @BlockUI() blockUI: NgBlockUI;
  menus: Menu[];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    app_name : string;
    module : string;
    showSubmenu: boolean = false;

  constructor(
    private breakpointObserver: BreakpointObserver, 
    private authService: AuthService,
    private storageService: StorageService,
    private menuService: MenuService,
    private snackBar: MatSnackBar,
    private globalclass: Globalclass
    ) {
      this.app_name = storageService.getSysParam().app_name;
      this.module = storageService.getCurrentModuleName();
      this.menuService.getMenu().subscribe((data:any) => {
        this.menus = data['menu'];
      }, (err:any) => {
        this.snackBar.openFromComponent(SnackComponent, 
          {data: 'Error : ' + err.status + ' ' + 'Error al mostrar el menú' + this.globalclass.snackMsjError, duration: this.globalclass.snackDuration, horizontalPosition: 'center', panelClass: [this.globalclass.snackError]});
      })
    }

  logout(){
    this.blockUI.start("Cerrando sesión");
    this.authService.logout(this.storageService.getCurrentSession()).subscribe((res:any) => {
      this.blockUI.stop();
      this.storageService.logout();
    }, (err:any) => {
      this.blockUI.stop();
      this.snackBar.openFromComponent(SnackComponent, 
        {data: 'Error : ' + err.status + ' ' + err.statusText + this.globalclass.snackMsjError, duration: this.globalclass.snackDuration, horizontalPosition: 'center', panelClass: [this.globalclass.snackError]});
    })
  }

  expandSubMenu(subMenu:any){
    this.showSubmenu = this.showSubmenu === subMenu ? '' :  subMenu;
  }

}
