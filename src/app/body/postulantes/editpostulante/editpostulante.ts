import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from "@angular/common";
import { postulantes } from '../postulantes';

@Component({
  selector: 'app-editpostulante',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './editpostulante.html',
  styleUrl: './editpostulante.css'
})
export class Editpostulante {
  @Input() postulante?: postulantes;
  @Output() cerrarEvent = new EventEmitter<void>();

  cerrar() {
    this.cerrarEvent.emit();
  }

  editPostulanteForm: FormGroup;

  constructor(private fb: FormBuilder){
    this.editPostulanteForm = this.fb.group({
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
    if (this.editPostulanteForm.valid){
      console.log('Datos:', this.editPostulanteForm.value);
    } else {
      this.editPostulanteForm.markAllAsTouched();
    }
  }
}
