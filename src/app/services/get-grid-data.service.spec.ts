import { TestBed, inject } from '@angular/core/testing';

import { GetGridDataService } from './get-grid-data.service';

describe('GetGridDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetGridDataService]
    });
  });

  it('should be created', inject([GetGridDataService], (service: GetGridDataService) => {
    expect(service).toBeTruthy();
  }));
});
