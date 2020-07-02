import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

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
  materias: Materia[] = [
    { value: '0', viewValue: 'Mongo DB' },
    { value: '1', viewValue: 'JavaScript' },
    { value: '2', viewValue: 'NodeJS' },
    { value: '3', viewValue: 'ExpressJS' },
  ];

  constructor(private fb: FormBuilder) {}

  alumnoForm = this.fb.group({
    nombre: [''],
    apellido: [''],
    edad: [''],
    materia: [''],
    anoCursada: [''],
  });

  ngOnInit(): void {}

  submit() {
    debugger;
    this.alumnoForm.value;
  }
}
