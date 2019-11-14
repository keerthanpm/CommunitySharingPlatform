import { TestBed } from '@angular/core/testing';

import { NewarticleService } from './newarticle.service';

describe('NewarticleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewarticleService = TestBed.get(NewarticleService);
    expect(service).toBeTruthy();
  });
});
