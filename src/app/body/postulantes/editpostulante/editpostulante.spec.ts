import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Editpostulante } from './editpostulante';

describe('Editpostulante', () => {
  let component: Editpostulante;
  let fixture: ComponentFixture<Editpostulante>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Editpostulante]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Editpostulante);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
