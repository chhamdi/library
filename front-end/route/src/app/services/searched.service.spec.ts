import { TestBed, inject } from '@angular/core/testing';

import { SearchedService } from './searched.service';

describe('SearchedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchedService]
    });
  });

  it('should be created', inject([SearchedService], (service: SearchedService) => {
    expect(service).toBeTruthy();
  }));
});
