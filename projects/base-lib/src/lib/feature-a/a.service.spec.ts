import {TestBed} from '@angular/core/testing';

import {AService} from './a.service';
import {BService} from '@base/base-lib/src/lib/feature-b';

describe('AService', () => {
  let service: AService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AService,
        BService
      ]
    });

    service = TestBed.inject(AService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
