import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './core/guard/auth-guard.service';
import { RoleModuleGuard } from './core/guard/role-module.guard';


const routes: Routes = [
  { path: 'main',
  loadChildren: () => import('./main/main.module').then(m => m.MainModule)
  },
  { path: '',
    loadChildren: () => import('./select-module/select-module.module').then(m => m.SelectModule),
    canActivate: [AuthGuardService] 
  },
  { path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule) 
  },
  { path: 'select-module',
  loadChildren: () => import('./select-module/select-module.module').then(m => m.SelectModule), 
  canActivate: [AuthGuardService] 
  },
  { path: 'seg',
  loadChildren: () => import('./seg/seg.module').then(m => m.SegModule) ,
  canActivate: [AuthGuardService, RoleModuleGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
