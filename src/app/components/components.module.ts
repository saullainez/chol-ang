import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { MAT_COLOR_FORMATS, NgxMatColorPickerModule, NGX_MAT_COLOR_FORMATS } from '@angular-material-components/color-picker';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { DatatableComponent } from './datatable/datatable.component';
import { DialogConfirmComponent } from './dialog-confirm/dialog-confirm.component';
import { DatatableConfigurableComponent } from './datatable-configurable/datatable-configurable.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { SelectComponent } from './select/select.component';
import { EmergentInputComponent } from './emergent-input/emergent-input.component';
import { SatPopoverModule } from '@ncstate/sat-popover';

import { DatepickerComponent } from './datepicker/datepicker.component';
import { DatepickerMyComponent } from './datepicker-my/datepicker-my.component';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';
import { EmergentDatepickerComponent } from './emergent-datepicker/emergent-datepicker.component';
import { CardsComponent } from './cards/cards.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { ColorpickerComponent } from './colorpicker/colorpicker.component';

import { PageBreadcrumbComponent } from './page-breadcrumb/page-breadcrumb.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CardIconComponent } from './card-icon/card-icon.component';

//import { DatepickerComponent } from './datepicker/datepicker.component';




@NgModule({

  declarations: [DatatableComponent, DialogConfirmComponent, DatatableConfigurableComponent, AutocompleteComponent, SelectComponent, EmergentInputComponent, PageBreadcrumbComponent, CardIconComponent, DatepickerComponent, DatepickerMyComponent, FileUploaderComponent, EmergentDatepickerComponent, CardsComponent, CheckboxComponent, RadioButtonComponent, SlideToggleComponent, ColorpickerComponent],
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule, SatPopoverModule, AngularFileUploaderModule, NgxMatColorPickerModule ],
  exports:[DatatableComponent, DialogConfirmComponent, DatatableConfigurableComponent,
    AutocompleteComponent, SelectComponent, PageBreadcrumbComponent, CardIconComponen, DatepickerComponent, DatepickerMyComponent,
    FileUploaderComponent, CardsComponent, CheckboxComponent, RadioButtonComponent,
    SlideToggleComponent, ColorpickerComponent],
  providers: [
    { provide: MAT_COLOR_FORMATS, useValue: NGX_MAT_COLOR_FORMATS }
  ]

})
export class ComponentsModule { }
