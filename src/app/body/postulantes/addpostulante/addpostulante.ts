import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from "@angular/common";

@Component({
  selector: 'app-addpostulante',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './addpostulante.html',
  styleUrl: './addpostulante.css'
})
export class Addpostulante {
  @Output() cerrarEvent = new EventEmitter<void>();

  cerrar() {
    this.cerrarEvent.emit();
  }

  addPostulanteForm: FormGroup;

  constructor(private fb: FormBuilder){
    this.addPostulanteForm = this.fb.group({
      exoneracionPostulante: ['',[Validators.required]],
      montoPostulante: ['',[Validators.required]],
      modoPostulante: ['', [Validators.required]],
      dniPostulante: ['', [Validators.required]],
      namepostulante: ['', [Validators.required]],
      lastnameFatherPostulante: ['', [Validators.required]],
      lastnameMotherPostulante: ['', [Validators.required]],
      carreraPostulante: ['', [Validators.required]],
      egresoPostualante: ['', [Validators.required]],
      schoolPostulante: ['', [Validators.required]]
    })
  }

  onSubmit(){
    if (this.addPostulanteForm.valid){
      console.log('Datos:', this.addPostulanteForm.value);
    } else {
      this.addPostulanteForm.markAllAsTouched();
    }
  }
}
