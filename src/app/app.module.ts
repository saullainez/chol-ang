import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GlobalService } from './core/services/global.service';
import { Globalclass } from './core/models/globalclass';
import { AuthGuardService } from './core/guard/auth-guard.service';
import { GuestGuardService } from './core/guard/guest-guard.service';
import { Session } from './core/models/session';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [GlobalService, Globalclass, AuthGuardService, GuestGuardService, Session],
  bootstrap: [AppComponent]
})
export class AppModule { }
