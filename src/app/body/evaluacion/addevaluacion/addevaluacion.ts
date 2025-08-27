import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-addevaluacion',
  imports: [],
  templateUrl: './addevaluacion.html',
  styleUrl: './addevaluacion.css'
})
export class Addevaluacion {
  @Output() cerrarEvent = new EventEmitter<void>();

  cerrar() {
    this.cerrarEvent.emit();
  }
}
