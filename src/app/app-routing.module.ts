import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },

  {
    path:'principal',
    loadChildren: () => import('./principal/principal.module').then(m => m.PrincipalModule)
  },

  {
    path: '**',
    redirectTo: 'auth'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes) //RUTAS PRINCIPALES DE LA APLICACION 
  ],
  
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
