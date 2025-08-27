import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from "@angular/common";

@Component({
  selector: 'app-configevaluacion',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './configevaluacion.html',
  styleUrl: './configevaluacion.css'
})
export class Configevaluacion {

  @Output() cerrarEvent = new EventEmitter<void>();

  cerrar() {
    this.cerrarEvent.emit();
  }

  configEvaluacionForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.configEvaluacionForm = this.fb.group({
      cantPreg: ['', [Validators.required]],
      configPunt: ['', [Validators.required]],
      rango: ['', [Validators.required]],
      punt: ['', [Validators.required]],
      puntMin: ['', [Validators.required]],
      sistemVige: [''],
      calcResult: ['', [Validators.required]],
      cantDecimales: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.configEvaluacionForm.valid) {
      console.log('Datos:', this.configEvaluacionForm.value);
    } else {
      this.configEvaluacionForm.markAllAsTouched();
    }
  }
}
