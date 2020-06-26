import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email : string;
  pass : string

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }
  login(){
    this.authService.login(this.email, this.pass).subscribe((res:any) => {
      console.log(res);
    },(err:any) => {
      console.log(err);
    })
  }

}
