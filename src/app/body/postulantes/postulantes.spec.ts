import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Postulantes } from './postulantes';

describe('Postulantes', () => {
  let component: Postulantes;
  let fixture: ComponentFixture<Postulantes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Postulantes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Postulantes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
