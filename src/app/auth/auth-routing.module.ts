import { VacacionesComponent } from './pages/vacaciones/vacaciones.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NominaComponent } from './pages/nomina/nomina.component';
import { RepososComponent } from './pages/reposos/reposos.component';

const routes: Routes = [
    {
      path: '',
      children: [
        {path: 'nomina', component:NominaComponent},
        {path: 'reposos', component:RepososComponent},
        {path: 'vacaciones', component:VacacionesComponent},
        //{path: '**', redirectTo:'nomina'} //SE DEFINIRA A FUTURO UNA RUTA POR DEFECTO
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
