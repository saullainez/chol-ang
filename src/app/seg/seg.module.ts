import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SegRoutingModule } from './seg-routing.module';
import { SegComponent } from './seg.component';
import { MainModule } from '../main/main.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ComponentsModule } from '../components/components.module';
import { MaterialModule } from '../material/material.module';
import { UsersComponent } from './users/users.component';


@NgModule({
  declarations: [SegComponent, DashboardComponent, UsersComponent],
  imports: [
    CommonModule,
    SegRoutingModule,
    MainModule,
    ComponentsModule,
    MaterialModule
  ],
  entryComponents: [],
  bootstrap: [SegComponent]
})
export class SegModule { }
