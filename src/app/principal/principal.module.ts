import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipalRoutingModule } from './principal-routing.module';
import { NominaComponent } from './pages/nomina/nomina.component';
import { RepososComponent } from './pages/reposos/reposos.component';
import { VacacionesComponent } from './pages/vacaciones/vacaciones.component';


@NgModule({
  declarations: [
    NominaComponent,
    RepososComponent,
    VacacionesComponent
  ],
  imports: [
    CommonModule,
    PrincipalRoutingModule
  ]
})
export class PrincipalModule { }
