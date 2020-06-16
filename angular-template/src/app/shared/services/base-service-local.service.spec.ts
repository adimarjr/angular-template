import { TestBed } from '@angular/core/testing';

import { BaseServiceLocalService } from './base-service-local.service';

describe('BaseServiceLocalService', () => {
  let service: BaseServiceLocalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseServiceLocalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
