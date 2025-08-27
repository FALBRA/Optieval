import { Component, EventEmitter, Output, Input } from '@angular/core';
import { evaluaciones } from '../evaluacion';

@Component({
  selector: 'app-pushevaluacion',
  imports: [],
  templateUrl: './pushevaluacion.html',
  styleUrl: './pushevaluacion.css'
})
export class Pushevaluacion {
  @Input() evaluacion?: evaluaciones;
  @Output() cerrarEvent = new EventEmitter<void>();

  cerrar() {
    this.cerrarEvent.emit();
  }
}
