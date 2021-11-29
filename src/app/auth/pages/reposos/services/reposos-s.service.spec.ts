import { TestBed } from '@angular/core/testing';

import { RepososSService } from './reposos-s.service';

describe('RepososSService', () => {
  let service: RepososSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepososSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
