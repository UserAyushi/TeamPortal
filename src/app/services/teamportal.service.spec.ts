import { TestBed } from '@angular/core/testing';

import { TeamportalService } from './teamportal.service';

describe('TeamportalService', () => {
  let service: TeamportalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeamportalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
