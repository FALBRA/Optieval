import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-deleteevaluacion',
  imports: [],
  templateUrl: './deleteevaluacion.html',
  styleUrl: './deleteevaluacion.css'
})
export class Deleteevaluacion {
  @Output() cerrarEvent = new EventEmitter<void>();

  cerrar() {
    this.cerrarEvent.emit();
  }
}
