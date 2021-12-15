import { HomeComponent } from './pages/home/home.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';


import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
    {
      path: '',
      children: [
        {path: 'login', component:LoginComponent},
        {path: 'registro', component:RegistroComponent},
        {path: 'home', component:HomeComponent},
        {path: '**', redirectTo:'home'} //SE DEFINIRA A FUTURO UNA RUTA POR DEFECTO
      ]
    }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild( routes ) //RUTAS SECUNDARIAS
  ]
})
export class AuthRoutingModule { }
