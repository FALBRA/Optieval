import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from "@angular/common";

@Component({
  selector: 'app-addevaluacion',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './addevaluacion.html',
  styleUrl: './addevaluacion.css'
})
export class Addevaluacion {
  @Output() cerrarEvent = new EventEmitter<void>();

  cerrar() {
    this.cerrarEvent.emit();
  }

  addEvaluacionForm: FormGroup;

  constructor(private fb: FormBuilder){
    this.addEvaluacionForm = this.fb.group({
      nameEvaluation: ['', [Validators.required]],
      dateEvaluation: ['', [Validators.required]],
      entityEvaluation: ['', [Validators.required]]
    });
  }

  onSubmit(){
    if (this.addEvaluacionForm.valid) {
      console.log('Datos:', this.addEvaluacionForm.value);
    } else {
      this.addEvaluacionForm.markAllAsTouched();
    }
  }
}
