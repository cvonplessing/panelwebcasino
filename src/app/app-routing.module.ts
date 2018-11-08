import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { PlatosComponent } from './platos/platos.component';
import {SenderComponent} from './sender/sender.component';
import {LoginComponent} from './login/login.component';
import {EditarComponent} from './editar/editar.component';

const AppRoutes: Routes = [

  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    component: LoginComponent
  },
  {

    path: 'platos',
    component: PlatosComponent

  },

  {
    path: 'sender',
    component: SenderComponent
  },
  {
    path: 'editar',
    component: EditarComponent
  },


  {
    path: '**',
    redirectTo: '/login',
    pathMatch: 'full'
  }

  ];

@NgModule({
  imports: [
    RouterModule.forRoot(AppRoutes)
  ],
  exports: [
  RouterModule
  ]

})
export class AppRoutingModule { }
