import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectModuleComponent } from './select-module.component';


const routes: Routes = [
  {
    path: '', component: SelectModuleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelectModuleRoutingModule { }
