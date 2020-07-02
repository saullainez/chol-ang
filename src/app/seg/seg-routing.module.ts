import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SegComponent } from './seg.component';


const routes: Routes = [
  {
    path: '', component: SegComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SegRoutingModule { }
