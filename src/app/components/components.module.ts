import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MomentDateModule } from "@angular/material-moment-adapter";
import { MatMomentDateModule, MomentDateAdapter } from "@angular/material-moment-adapter";
import { DatatableComponent } from './datatable/datatable.component';
import { DialogConfirmComponent } from './dialog-confirm/dialog-confirm.component';
import { DatatableConfigurableComponent } from './datatable-configurable/datatable-configurable.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { SelectComponent } from './select/select.component';
import { EmergentInputComponent } from './emergent-input/emergent-input.component';
import { SatPopoverModule } from '@ncstate/sat-popover';
import { PageBreadcrumbComponent } from './page-breadcrumb/page-breadcrumb.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CardIconComponent } from './card-icon/card-icon.component';

//import { DatepickerComponent } from './datepicker/datepicker.component';



@NgModule({
  declarations: [DatatableComponent, DialogConfirmComponent, DatatableConfigurableComponent, AutocompleteComponent, SelectComponent, EmergentInputComponent, PageBreadcrumbComponent, CardIconComponent],
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule, SatPopoverModule, FlexLayoutModule ],
  exports:[DatatableComponent, DialogConfirmComponent, DatatableConfigurableComponent,
    AutocompleteComponent, SelectComponent, PageBreadcrumbComponent, CardIconComponent]
})
export class ComponentsModule { }
