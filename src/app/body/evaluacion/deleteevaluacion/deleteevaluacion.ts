import { Component, EventEmitter, Output, Input } from '@angular/core';
import { evaluaciones } from '../evaluacion';

@Component({
  selector: 'app-deleteevaluacion',
  imports: [],
  templateUrl: './deleteevaluacion.html',
  styleUrl: './deleteevaluacion.css'
})
export class Deleteevaluacion {
  @Input() evaluacion?: evaluaciones;
  @Output() cerrarEvent = new EventEmitter<void>();

  cerrar() {
    this.cerrarEvent.emit();
  }
}
