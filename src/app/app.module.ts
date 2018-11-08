import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { PlatosComponent } from './platos/platos.component';
import { LoginComponent } from './login/login.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { Material } from './modules_/material';
import { SenderComponent } from './sender/sender.component';
import { AppRoutingModule } from './app-routing.module';
import { PlatosService} from './services_/platos.service';
import { EditarComponent } from './editar/editar.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    PlatosComponent,
    LoginComponent,
    SenderComponent,
    EditarComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    Material,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    PlatosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
