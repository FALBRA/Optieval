import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reportevaluacion } from './reportevaluacion';

describe('Reportevaluacion', () => {
  let component: Reportevaluacion;
  let fixture: ComponentFixture<Reportevaluacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reportevaluacion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reportevaluacion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
