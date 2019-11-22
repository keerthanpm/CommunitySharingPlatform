import { TestBed } from '@angular/core/testing';

import { MypostsService } from './myposts.service';

describe('MypostsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MypostsService = TestBed.get(MypostsService);
    expect(service).toBeTruthy();
  });
});
