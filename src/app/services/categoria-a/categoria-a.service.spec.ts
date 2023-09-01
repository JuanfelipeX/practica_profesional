import { TestBed } from '@angular/core/testing';

import { CategoriaAService } from './categoria-a.service';

describe('CategoriaAService', () => {
  let service: CategoriaAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriaAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
