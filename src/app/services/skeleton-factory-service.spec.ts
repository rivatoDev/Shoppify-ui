import { TestBed } from '@angular/core/testing';

import { SkeletonFactoryService } from './skeleton-factory-service';

describe('SkeletonFactoryService', () => {
  let service: SkeletonFactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkeletonFactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
