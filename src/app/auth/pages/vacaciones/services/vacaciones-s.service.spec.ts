import { TestBed } from '@angular/core/testing';

import { VacacionesSService } from './vacaciones-s.service';

describe('VacacionesSService', () => {
  let service: VacacionesSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VacacionesSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
