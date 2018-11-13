import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS  } from '@angular/common/http';
import { PlatosComponent } from './platos/platos.component';
import { LoginComponent } from './login/login.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { Material } from './modules_/material';
import { SenderComponent } from './sender/sender.component';
import { AppRoutingModule } from './app-routing.module';
import { PlatosService} from './services_/platos.service';
import { EditarComponent } from './editar/editar.component';
import {SenderService} from './services_/sender.service';
import { JwtInterceptor} from './http_/jwt.interceptor';
import {ErrorInterceptor } from './http_/error.interceptor';
import {LoginService} from './services_/login.service';

@NgModule({
  declarations: [
    AppComponent,
    PlatosComponent,
    LoginComponent,
    SenderComponent,
    EditarComponent
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
    PlatosService,
    SenderService,
    LoginService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
