import { TestBed } from '@angular/core/testing';

import { ItemLocalService } from './item-local.service';

describe('ItemLocalService', () => {
  let service: ItemLocalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemLocalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
