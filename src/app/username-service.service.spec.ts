import { TestBed } from '@angular/core/testing';

import { UsernameServiceService } from './username-service.service';

describe('UsernameServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsernameServiceService = TestBed.get(UsernameServiceService);
    expect(service).toBeTruthy();
  });
});
