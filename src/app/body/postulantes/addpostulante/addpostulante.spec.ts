import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Addpostulante } from './addpostulante';

describe('Addpostulante', () => {
  let component: Addpostulante;
  let fixture: ComponentFixture<Addpostulante>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Addpostulante]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Addpostulante);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
