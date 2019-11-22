import { TestBed } from '@angular/core/testing';

import { GetarticleService } from './getarticle.service';

describe('GetarticleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetarticleService = TestBed.get(GetarticleService);
    expect(service).toBeTruthy();
  });
});
