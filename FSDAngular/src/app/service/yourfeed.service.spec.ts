import { TestBed } from '@angular/core/testing';

import { YourfeedService } from './yourfeed.service';

describe('YourfeedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YourfeedService = TestBed.get(YourfeedService);
    expect(service).toBeTruthy();
  });
});
