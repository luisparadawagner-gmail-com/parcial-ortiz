import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormularioAlumnoComponent } from './componentes/formulario-alumno/formulario-alumno.component';
import { TablaAlumnoComponent } from './componentes/tabla-alumno/tabla-alumno.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioAlumnoComponent,
    TablaAlumnoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
