import { TestBed } from '@angular/core/testing';

import { MoviesRepository } from './movies-repository.service';

describe('MoviesRepositoryService', () => {
  let service: MoviesRepository;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesRepository);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
