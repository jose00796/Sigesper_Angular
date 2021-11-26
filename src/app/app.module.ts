import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NominaComponent } from './pages/nomina/nomina.component';
import { RepososComponent } from './pages/reposos/reposos.component';
import{ HttpClientModule } from '@angular/common/http';
import { VacacionesComponent } from './pages/vacaciones/vacaciones.component';

@NgModule({
  declarations: [
    AppComponent,
    NominaComponent,
    RepososComponent,
    VacacionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
