import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from "@angular/common";

@Component({
  selector: 'app-addpostulante',
  imports: [ReactiveFormsModule],
  templateUrl: './addpostulante.html',
  styleUrl: './addpostulante.css'
})
export class Addpostulante {
  @Output() cerrarEvent = new EventEmitter<void>();

  cerrar() {
    this.cerrarEvent.emit();
  }
}
