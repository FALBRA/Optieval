import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Configevaluacion } from './configevaluacion';

describe('Configevaluacion', () => {
  let component: Configevaluacion;
  let fixture: ComponentFixture<Configevaluacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Configevaluacion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Configevaluacion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
