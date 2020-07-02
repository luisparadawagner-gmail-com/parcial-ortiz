import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/clase/Alumno';
import { ComponentConsultarService } from 'src/app/servicio/component-consultar.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tabla-alumno',
  templateUrl: './tabla-alumno.component.html',
  styleUrls: ['./tabla-alumno.component.css'],
})
export class TablaAlumnoComponent implements OnInit {
  displayedColumns: string[] = [
    'nombre',
    'apellido',
    'edad',
    'materia',
    'anoCursada',
    'editar',
  ];
  dataSource: Alumno[] = [];

  alumnoNuevo: any;

  constructor(
    private componentConsultarService: ComponentConsultarService,
    private router: Router,
    private rutaA: ActivatedRoute
  ) {}

  ngOnInit(): void {
    debugger;
    this.getAlumnos();
  }

  getAlumnos() {
    this.componentConsultarService.getAlumno().subscribe((alumnos) => {
      debugger;
      this.dataSource = alumnos;
      this.agregarFila();
    });
  }

  agregarFila() {
    debugger;
    this.alumnoNuevo = this.rutaA.snapshot.params;
    this.dataSource.push(this.alumnoNuevo);
  }

  editar(element) {
    debugger;
    this.router.navigate(['/formulario-alumno-component', element]);
  }
}
