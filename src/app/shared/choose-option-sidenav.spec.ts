import { TestBed } from '@angular/core/testing';

import { ChooseOptionSidenav } from './choose-option-sidenav';

describe('ChooseOptionSidenav', () => {
  let service: ChooseOptionSidenav;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChooseOptionSidenav);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
