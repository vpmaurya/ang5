import { TestBed, inject } from '@angular/core/testing';

import { AccountResolveService } from './account-resolve.service';

describe('AccountResolveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccountResolveService]
    });
  });

  it('should be created', inject([AccountResolveService], (service: AccountResolveService) => {
    expect(service).toBeTruthy();
  }));
});
