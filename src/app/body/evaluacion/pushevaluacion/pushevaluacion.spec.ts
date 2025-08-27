import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pushevaluacion } from './pushevaluacion';

describe('Pushevaluacion', () => {
  let component: Pushevaluacion;
  let fixture: ComponentFixture<Pushevaluacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pushevaluacion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pushevaluacion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
