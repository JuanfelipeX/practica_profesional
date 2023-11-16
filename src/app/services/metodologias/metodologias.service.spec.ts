import { TestBed } from '@angular/core/testing';

import { MetodologiasService } from './metodologias.service';

describe('MetodologiasService', () => {
  let service: MetodologiasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MetodologiasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
