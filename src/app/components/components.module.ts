import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';

import { DatatableComponent } from './datatable/datatable.component';



@NgModule({
  declarations: [DatatableComponent],
  imports: [CommonModule, MaterialModule],
  exports:[DatatableComponent]
})
export class ComponentsModule { }
