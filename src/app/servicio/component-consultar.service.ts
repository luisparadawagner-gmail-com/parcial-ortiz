import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ComponentConsultarService {
  constructor(private httpClient: HttpClient) {}

  getAlumno(): Observable<any> {
    return this.httpClient.get('./assets/Alumno.json');
  }
}
