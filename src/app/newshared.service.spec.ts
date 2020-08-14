import { TestBed } from '@angular/core/testing';

import { NewsharedService } from './newshared.service';

describe('NewsharedService', () => {
  let service: NewsharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
