import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Deletepostulante } from './deletepostulante';

describe('Deletepostulante', () => {
  let component: Deletepostulante;
  let fixture: ComponentFixture<Deletepostulante>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Deletepostulante]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Deletepostulante);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
