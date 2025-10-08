import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';

export interface postulantes {
  dni: number;
  nombres: string;
  apellidos: string;
  area: string;
  carrera: string;
  evaluacion: string;
}

const POSTULANTES_DATA: postulantes[] = [
  { dni: 73991573, nombres: 'JOSH GRAJAM', apellidos: 'FALCON CABRA', area: 'III', carrera: 'Ing. Sistemas',  evaluacion: 'CEPREVAL' },
  { dni: 62548964, nombres: 'KATERIN', apellidos: 'SOLORZANO CAMPOS', area: 'II', carrera: 'CC. de la comunicación', evaluacion: 'Admisión General 2026-I' },
  { dni: 20649753, nombres: 'ALESSANDRO DAVID', apellidos: 'INOCENTE MONAGO', area: 'III', carrera: 'Arquitectura', evaluacion: 'Simulacro CEPREVAL' },
  { dni: 71094784, nombres: 'SEBASTIAN', apellidos: 'CALERO CHACON', area: 'IV', carrera: 'CC. contables y financieras', evaluacion: 'CEPREVAL' },
  { dni: 30748592, nombres: 'MARICARMEN', apellidos: 'BOBADILLA WONG', area: 'I', carrera: 'Medicina Humana', evaluacion: 'CEPREVAL' },
];

@Component({
  selector: 'app-postulantes',
  imports: [CommonModule, MatTableModule],
  templateUrl: './postulantes.html',
  styleUrl: './postulantes.css'
})
export class Postulantes {
  displayedColumns: string[] = ['dni', 'nombres', 'apellidos', 'area', 'carrera', 'accion'];
  dataSource = POSTULANTES_DATA;

  selectedEvaluacion: string = '';
  searchTerm: string = '';

  evaluaciones: string[] = [];

  constructor(){
    this.evaluaciones = Array.from(new Set(POSTULANTES_DATA.map(p => p.evaluacion)));
  }

  aplicarFiltros(){
    this.dataSource = POSTULANTES_DATA.filter(postulante => {
      const coincideEvaluacion = 
        !this.selectedEvaluacion || postulante.evaluacion === this.selectedEvaluacion;

      const coincideBusqueda =
        !this.searchTerm || 
        postulante.nombres.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        postulante.apellidos.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        postulante.dni.toString().includes(this.searchTerm) ||
        postulante.carrera.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        postulante.area.toLowerCase().includes(this.searchTerm.toLowerCase());
      return coincideEvaluacion && coincideBusqueda;
    });
  }

  filtrarPorEvaluacion(event: Event){
    this.selectedEvaluacion = (event.target as HTMLSelectElement).value;
    this.aplicarFiltros();
  }

  filtrarPorBusqueda(event: Event){
    this.searchTerm = (event.target as HTMLInputElement).value;
    this.aplicarFiltros();
  }
}
