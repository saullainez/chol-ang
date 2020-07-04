import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ComponentsModule } from '../components/components.module';
import { BlockUIModule } from 'ng-block-ui';


@NgModule({
  declarations: [MainComponent, NavComponent, DashboardComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    LayoutModule,
    MaterialModule,
    ComponentsModule,
    BlockUIModule.forRoot()
  ]
})
export class MainModule { }
