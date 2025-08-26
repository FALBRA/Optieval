import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Addevaluacion } from './addevaluacion';

describe('Addevaluacion', () => {
  let component: Addevaluacion;
  let fixture: ComponentFixture<Addevaluacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Addevaluacion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Addevaluacion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
