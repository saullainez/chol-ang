import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SegComponent } from './seg.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {
    path: '', component: SegComponent,
    children : [
      { path: '', component: DashboardComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SegRoutingModule { }
