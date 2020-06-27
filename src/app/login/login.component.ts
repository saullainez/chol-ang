import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { Session } from '../core/models/session';
import { StorageService } from '../core/services/storage.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackComponent } from '../core/snack/snack.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email : string;
  pass : string

  constructor(
    private authService: AuthService,
    private session: Session,
    private storageService: StorageService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
   }

  ngOnInit(): void {
  }
  login(){
    this.authService.login(this.email, this.pass).subscribe((res:any) => {
      if(res['validate']){
        this.session.username = res['username'];
        this.session.token = res['token'];
        this.session.expires_at = res['expires_at'];
        this.session.email = res['email'];
        this.storageService.setCurrentSession(this.session);
        this.router.navigateByUrl('/');
      }else{
        this.snackBar.openFromComponent(SnackComponent, {data: 'Credenciales inválidas |error', duration: 5000, horizontalPosition: 'center', panelClass: ['error-snackbar']});
      }
    },(err:any) => {
      this.snackBar.openFromComponent(SnackComponent, {data: err + ' |error', duration: 5000, horizontalPosition: 'center', panelClass: ['err-snackbar']});
    })
  }

}
