import { TestBed } from '@angular/core/testing';

import { CategoriaBService } from './categoria-b.service';

describe('CategoriaBService', () => {
  let service: CategoriaBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriaBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
