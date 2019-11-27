import { TestBed } from '@angular/core/testing';

import { TextareaService } from './textarea.service';

describe('TextareaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TextareaService = TestBed.get(TextareaService);
    expect(service).toBeTruthy();
  });
});
