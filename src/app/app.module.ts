import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GlobalService } from './core/services/global.service';
import { Globalclass } from './core/models/globalclass';
import { AuthGuardService } from './core/guard/auth-guard.service';
import { GuestGuardService } from './core/guard/guest-guard.service';
import { Session } from './core/models/session';
import { ComponentsModule } from './components/components.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Rolemodule } from './core/models/rolemodule';
import { RoleModuleGuard } from './core/guard/role-module.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    CommonModule,
    ComponentsModule,
    FlexLayoutModule
  ],
  providers: [GlobalService, Globalclass, AuthGuardService, GuestGuardService, Session, Rolemodule, RoleModuleGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
