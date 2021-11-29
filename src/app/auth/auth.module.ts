import { AuthRoutingModule } from './auth-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//COMPONENTES
import { NominaComponent } from './pages/nomina/nomina.component';
import { RepososComponent } from './pages/reposos/reposos.component';
import { VacacionesComponent } from './pages/vacaciones/vacaciones.component';



@NgModule({
  declarations: [
    NominaComponent,
    RepososComponent,
    VacacionesComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
