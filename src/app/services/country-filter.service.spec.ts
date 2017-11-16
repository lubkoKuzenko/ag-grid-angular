import { TestBed, inject } from '@angular/core/testing';

import { CountryFilterService } from './country-filter.service';

describe('CountryFilterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CountryFilterService]
    });
  });

  it('should be created', inject([CountryFilterService], (service: CountryFilterService) => {
    expect(service).toBeTruthy();
  }));
});
