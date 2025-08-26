import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Editevaluacion } from './editevaluacion';

describe('Editevaluacion', () => {
  let component: Editevaluacion;
  let fixture: ComponentFixture<Editevaluacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Editevaluacion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Editevaluacion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
