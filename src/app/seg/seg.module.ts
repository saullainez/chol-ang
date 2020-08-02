import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SegRoutingModule } from './seg-routing.module';
import { SegComponent } from './seg.component';
import { MainModule } from '../main/main.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ComponentsModule } from '../components/components.module';
import { MaterialModule } from '../material/material.module';
import { UsersComponent } from './users/users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PermissionMenuComponent } from './permission-menu/permission-menu.component';


@NgModule({
  declarations: [SegComponent, DashboardComponent, UsersComponent, PermissionMenuComponent],
  imports: [
    CommonModule,
    SegRoutingModule,
    MainModule,
    ComponentsModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  entryComponents: [],
  bootstrap: [SegComponent]
})
export class SegModule { }
