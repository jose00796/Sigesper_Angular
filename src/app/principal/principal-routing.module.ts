import { VacacionesComponent } from './pages/vacaciones/vacaciones.component';
import { RepososComponent } from './pages/reposos/reposos.component';
import { NominaComponent } from './pages/nomina/nomina.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children:[
      {path:'nomina', component:NominaComponent},
      {path:'reposos', component:RepososComponent},
      {path:'vacaciones', component:VacacionesComponent},
      //{path:'**', redirectTo:''}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalRoutingModule { }
