import { TestBed } from '@angular/core/testing';

import { SegService } from './seg.service';

describe('SegService', () => {
  let service: SegService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SegService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
