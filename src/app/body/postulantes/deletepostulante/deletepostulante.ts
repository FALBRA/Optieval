import { Component, EventEmitter, Output, Input } from '@angular/core';
import { postulantes } from '../postulantes';

@Component({
  selector: 'app-deletepostulante',
  imports: [],
  templateUrl: './deletepostulante.html',
  styleUrl: './deletepostulante.css'
})
export class Deletepostulante {
  @Input() postulante?: postulantes;
  @Output() cerrarEvent = new EventEmitter<void>();

  cerrar() {
    this.cerrarEvent.emit();
  }
}
