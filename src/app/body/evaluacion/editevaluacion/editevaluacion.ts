import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-editevaluacion',
  imports: [],
  templateUrl: './editevaluacion.html',
  styleUrl: './editevaluacion.css'
})
export class Editevaluacion {
  @Output() cerrarEvent = new EventEmitter<void>();

  cerrar() {
    this.cerrarEvent.emit();
  }
}
