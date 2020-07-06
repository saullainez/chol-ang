import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SegRoutingModule } from './seg-routing.module';
import { SegComponent } from './seg.component';
import { MainModule } from '../main/main.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [SegComponent, DashboardComponent],
  imports: [
    CommonModule,
    SegRoutingModule,
    MainModule,
    ComponentsModule
  ],
  entryComponents: [],
  bootstrap: [SegComponent]
})
export class SegModule { }
