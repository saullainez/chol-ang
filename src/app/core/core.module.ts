import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { SnackComponent } from './snack/snack.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [SnackComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MatIconModule
  ],
  entryComponents: [SnackComponent],
  exports: [SnackComponent]
})
export class CoreModule { }
