import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { Session } from '../core/models/session';
import { StorageService } from '../core/services/storage.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackComponent } from '../core/snack/snack.component';
import { Globalclass } from '../core/models/globalclass';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI;
  username : string = "";
  pass : string = "";

  constructor(
    private authService: AuthService,
    private session: Session,
    private storageService: StorageService,
    private router: Router,
    private snackBar: MatSnackBar,
    private globalclass: Globalclass
  ) {
   }

  ngOnInit(): void {
  }
  login(){
    this.blockUI.start("Iniciando sesión");
    if(this.username != "" && this.pass != ""){
      this.authService.login(this.username, this.pass).subscribe((res:any) => {
        if(res['validate']){
          this.session.username = res['username'];
          this.session.token = res['token'];
          this.session.expires_at = res['expires_at'];
          this.session.email = res['email'];
          this.session.role = res['role_prefix'];
          this.storageService.setCurrentSession(this.session);
          this.blockUI.stop();
          this.router.navigateByUrl('select-module');
        }else{
          this.blockUI.stop();
          this.snackBar.openFromComponent(SnackComponent, 
            {data: 'Credenciales inválidas' + this.globalclass.snackMsjError, duration: this.globalclass.snackDuration, horizontalPosition: 'center', panelClass: [this.globalclass.snackError]});
        }
      },(err:any) => {
        this.blockUI.stop();
        this.snackBar.openFromComponent(SnackComponent, 
          {data: err + this.globalclass.snackMsjError, duration: this.globalclass.snackDuration, horizontalPosition: 'center', panelClass: [this.globalclass.snackError]});
      })
    }else{
      this.blockUI.stop();
      this.snackBar.openFromComponent(SnackComponent, 
        {data: 'Debe llenar todos los campos' + this.globalclass.snackMsjWarning, duration: this.globalclass.snackDuration, horizontalPosition: 'center', panelClass: [this.globalclass.snackWarning]});
    }

  }

}
