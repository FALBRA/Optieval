import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Deleteevaluacion } from './deleteevaluacion';

describe('Deleteevaluacion', () => {
  let component: Deleteevaluacion;
  let fixture: ComponentFixture<Deleteevaluacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Deleteevaluacion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Deleteevaluacion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
