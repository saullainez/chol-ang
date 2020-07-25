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
import { FooterComponent } from './footer/footer.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';



@NgModule({
  declarations: [MainComponent, NavComponent, DashboardComponent, FooterComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    LayoutModule,
    MaterialModule,
    ComponentsModule,
    FormsModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    BlockUIModule.forRoot()
  ],
  exports: [MainComponent, NavComponent, DashboardComponent, FooterComponent]
})
export class MainModule { }
