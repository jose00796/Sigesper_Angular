import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//SERVICIOS
import { CargarScriptsService } from './cargar-scripts.service';
//FIN SERVICIOS 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{ HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    CargarScriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
