import { TestBed, inject } from '@angular/core/testing';

import { LibaryService } from './libary.service';

describe('LibaryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LibaryService]
    });
  });

  it('should be created', inject([LibaryService], (service: LibaryService) => {
    expect(service).toBeTruthy();
  }));
});
