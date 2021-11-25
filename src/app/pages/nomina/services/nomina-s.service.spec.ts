import { TestBed } from '@angular/core/testing';

import { NominaSService } from './nomina-s.service';

describe('NominaSService', () => {
  let service: NominaSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NominaSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
