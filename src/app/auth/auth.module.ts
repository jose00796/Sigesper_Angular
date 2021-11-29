import { AuthRoutingModule } from './auth-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//COMPONENTES
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { HomeComponent } from './pages/home/home.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
