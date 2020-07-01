import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './core/guard/auth-guard.service';


const routes: Routes = [
  { path: '',
    loadChildren: () => import('./main/main.module').then(m => m.MainModule)
  },
  { path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule) 
  },
  { path: 'select-module',
  loadChildren: () => import('./select-module/select-module.module').then(m => m.SelectModule), 
  canActivate: [AuthGuardService] 
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
