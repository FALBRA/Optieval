import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

export interface postulantes {
  dni: number;
  nombres: string;
  apellidos: string;
  area: string;
  carrera: string;
}

const POSTULANTES_DATA: postulantes[] = [
  { dni: 73991573, nombres: 'JOSH GRAJAM', apellidos: 'FALCON CABRA', area: 'III', carrera: 'Ing. Sistemas' },
  { dni: 62548964, nombres: 'KATERIN', apellidos: 'SOLORZANO CAMPOS', area: 'II', carrera: 'CC. de la comunicación' },
  { dni: 20649753, nombres: 'ALESSANDRO DAVID', apellidos: 'INOCENTE MONAGO', area: 'III', carrera: 'Arquitectura' },
  { dni: 71094784, nombres: 'SEBASTIAN', apellidos: 'CALERO CHACON', area: 'IV', carrera: 'CC. contables y financieras' },
  { dni: 30748592, nombres: 'MARICARMEN', apellidos: 'BOBADILLA WONG', area: 'I', carrera: 'Medicina Humana' },
];

@Component({
  selector: 'app-postulantes',
  imports: [MatTableModule],
  templateUrl: './postulantes.html',
  styleUrl: './postulantes.css'
})
export class Postulantes {
  displayedColumns: string[] = ['dni', 'nombres', 'apellidos', 'area', 'carrera', 'accion'];
  dataSource = POSTULANTES_DATA;
}
