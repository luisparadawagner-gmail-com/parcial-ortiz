import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Alumno } from 'src/app/clase/Alumno';
import { ActivatedRoute, Router } from '@angular/router';

interface Materia {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-formulario-alumno',
  templateUrl: './formulario-alumno.component.html',
  styleUrls: ['./formulario-alumno.component.css'],
})
export class FormularioAlumnoComponent implements OnInit {
  alumno: Alumno;
  registro: any;

  materias: Materia[] = [
    { value: '0', viewValue: 'Mongo DB' },
    { value: '1', viewValue: 'JavaScript' },
    { value: '2', viewValue: 'NodeJS' },
    { value: '3', viewValue: 'ExpressJS' },
  ];

  constructor(
    private fb: FormBuilder,
    private rutaActiva: ActivatedRoute,
    private router: Router
  ) {}

  alumnoForm = this.fb.group({
    nombre: [''],
    apellido: [''],
    edad: [''],
    materia: [''],
    anoCursada: [''],
  });

  ngOnInit(): void {
    debugger;

    this.registro = this.rutaActiva.snapshot.params;

    if (Object.keys(this.registro).length) {
      this.alumno = this.registro;
    }

    this.initForm(this.alumno);
  }

  initForm(editarAlumno: Alumno) {
    this.alumnoForm = this.fb.group({
      nombre: [editarAlumno ? editarAlumno.nombre : ''],
      apellido: [editarAlumno ? editarAlumno.apellido : ''],
      edad: [editarAlumno ? editarAlumno.edad : ''],
      materia: [editarAlumno ? editarAlumno.materia : ''],
      anoCursada: [editarAlumno ? editarAlumno.anoCursada : ''],
    });
  }

  submit() {
    debugger;
    this.alumnoForm.value;

    this.alumno = this.alumnoForm.value;
    this.router.navigate(['/tabla-alumno-component', this.alumno]);
  }
}
