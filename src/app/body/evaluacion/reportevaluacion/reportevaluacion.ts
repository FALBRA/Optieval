import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-reportevaluacion',
  imports: [],
  templateUrl: './reportevaluacion.html',
  styleUrl: './reportevaluacion.css'
})
export class Reportevaluacion {
  @Output() cerrarEvent = new EventEmitter<void>();

  cerrar() {
    this.cerrarEvent.emit();
  }
}
