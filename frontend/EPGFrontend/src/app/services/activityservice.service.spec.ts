import { TestBed } from '@angular/core/testing';

import { ActivityserviceService } from './activityservice.service';

describe('ActivityserviceService', () => {
  let service: ActivityserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivityserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
