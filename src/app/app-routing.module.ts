import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioAlumnoComponent } from './componentes/formulario-alumno/formulario-alumno.component';
import { TablaAlumnoComponent } from './componentes/tabla-alumno/tabla-alumno.component';

const routes: Routes = [
  { path: 'formulario-alumno-component', component: FormularioAlumnoComponent },
  { path: 'tabla-alumno-component', component: TablaAlumnoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
