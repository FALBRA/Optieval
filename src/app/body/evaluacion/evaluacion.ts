import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { Addevaluacion } from "./addevaluacion/addevaluacion";
import { Configevaluacion } from "./configevaluacion/configevaluacion";
import { Deleteevaluacion } from "./deleteevaluacion/deleteevaluacion";
import { Editevaluacion } from "./editevaluacion/editevaluacion";
import { Pushevaluacion } from "./pushevaluacion/pushevaluacion";
import { Reportevaluacion } from "./reportevaluacion/reportevaluacion";

export interface evaluaciones {
  id: number;
  nombre: string;
  entidad: string;
  fecha: string;
}

const EVALUACIONES_DATA: evaluaciones[] = [
  {id:1, nombre: 'Segundo simulacro', entidad: 'CEPREVAL', fecha: '30/08/2025'},
  {id:2, nombre: 'Examen', entidad: 'UNHEVAL admisión', fecha: '30/09/2026'},
  {id:3, nombre: 'Capacitación', entidad: 'PJ', fecha: '05/12/2026'},
];

@Component({
  selector: 'app-evaluacion',
  imports: [MatTableModule, Addevaluacion, Configevaluacion, Deleteevaluacion, Editevaluacion, Pushevaluacion, Reportevaluacion],
  templateUrl: './evaluacion.html',
  styleUrl: './evaluacion.css'
})
export class Evaluacion {
  displayedColumns: string[] = ['id', 'nombre', 'entidad', 'fecha', 'accion'];
  dataSource = EVALUACIONES_DATA;
}
