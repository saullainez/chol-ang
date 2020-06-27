import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GlobalService } from './core/services/global.service';
import { Globalclass } from './core/models/globalclass';
import { AuthGuardService } from './core/guard/auth-guard.service';
import { GuestGuardService } from './core/guard/guest-guard.service';
import { Session } from './core/models/session';
import {MatSnackBarModule} from '@angular/material/snack-bar'; 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    CommonModule
  ],
  providers: [GlobalService, Globalclass, AuthGuardService, GuestGuardService, Session],
  bootstrap: [AppComponent]
})
export class AppModule { }
