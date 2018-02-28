import { TestBed, inject } from '@angular/core/testing';

import { SearchnearbyService } from './searchnearby.service';

describe('SearchnearbyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchnearbyService]
    });
  });

  it('should be created', inject([SearchnearbyService], (service: SearchnearbyService) => {
    expect(service).toBeTruthy();
  }));
});
