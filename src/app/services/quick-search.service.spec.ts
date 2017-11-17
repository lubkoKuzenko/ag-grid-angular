import { TestBed, inject } from '@angular/core/testing';

import { QuickSearchService } from './quick-search.service';

describe('QuickSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuickSearchService]
    });
  });

  it('should be created', inject([QuickSearchService], (service: QuickSearchService) => {
    expect(service).toBeTruthy();
  }));
});
