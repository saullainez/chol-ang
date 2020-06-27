import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { Session } from '../core/models/session';
import { StorageService } from '../core/services/storage.service';
import { Router } from '@angular/router';

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
    private router: Router
  ) { }

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

      }
    },(err:any) => {
      console.log(err);
    })
  }

}
