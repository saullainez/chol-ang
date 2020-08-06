import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SegComponent } from './seg.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { PermissionMenuComponent } from './permission-menu/permission-menu.component';
import { RolemoduleComponent } from './rolemodule/rolemodule.component';


const routes: Routes = [
  {
    path: '', component: SegComponent,
    children : [
      { path: '', component: DashboardComponent },
      { path: 'users', component: UsersComponent },
      { path: 'users/:id', component: UsersComponent },
      { path: 'menu_permission', component: PermissionMenuComponent },
      { path: 'menu_permission/:id', component: PermissionMenuComponent },
      { path: 'role_module', component: RolemoduleComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SegRoutingModule { }
