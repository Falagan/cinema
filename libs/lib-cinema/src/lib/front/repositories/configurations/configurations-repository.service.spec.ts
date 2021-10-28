import { TestBed } from '@angular/core/testing';

import { ConfigurationsRepositoryService } from './configurations-repository.service';

describe('ConfigurationsRepositoryService', () => {
  let service: ConfigurationsRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigurationsRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
