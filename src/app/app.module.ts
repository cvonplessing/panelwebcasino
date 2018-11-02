import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { PlatosComponent } from './platos/platos.component';
import { LoginComponent } from './login/login.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { Material } from './modules_/material';

@NgModule({
  declarations: [
    AppComponent,
    PlatosComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    Material,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
