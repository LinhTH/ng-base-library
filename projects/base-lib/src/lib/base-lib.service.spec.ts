import { TestBed } from '@angular/core/testing';

import { BaseLibService } from './base-lib.service';

describe('BaseLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BaseLibService = TestBed.get(BaseLibService);
    expect(service).toBeTruthy();
  });
});
