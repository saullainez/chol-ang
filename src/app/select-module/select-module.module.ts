import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';

import { SelectModuleRoutingModule } from './select-module-routing.module';
import { SelectModuleComponent } from './select-module.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BlockUIModule } from 'ng-block-ui';



@NgModule({
  declarations: [SelectModuleComponent],
  imports: [
    CommonModule,
    SelectModuleRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    BlockUIModule.forRoot()
  ]
})
export class SelectModule { }
