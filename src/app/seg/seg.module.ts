import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SegRoutingModule } from './seg-routing.module';
import { SegComponent } from './seg.component';


@NgModule({
  declarations: [SegComponent],
  imports: [
    CommonModule,
    SegRoutingModule
  ]
})
export class SegModule { }
