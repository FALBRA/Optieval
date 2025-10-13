import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from "@angular/common";
import { evaluaciones } from '../evaluacion';

@Component({
  selector: 'app-editevaluacion',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './editevaluacion.html',
  styleUrl: './editevaluacion.css'
})
export class Editevaluacion {
  @Input() evaluacion?: evaluaciones;
  @Output() cerrarEvent = new EventEmitter<void>();

  cerrar() {
    this.cerrarEvent.emit();
  }

  editEvaluacionForm: FormGroup;

  constructor(private fb: FormBuilder){
    this.editEvaluacionForm = this.fb.group({
      nameEvaluation: ['', [Validators.required]],
      dateEvaluation: ['', [Validators.required]],
      entityEvaluation: ['', [Validators.required]]
    });
  }

  onSubmit(){
    if (this.editEvaluacionForm.valid) {
      console.log('Datos:', this.editEvaluacionForm.value);
    } else {
      this.editEvaluacionForm.markAllAsTouched();
    }
  }

}
