import { TestBed, inject } from '@angular/core/testing';

import { BookValidationService } from './book-validation.service';

describe('BookValidationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookValidationService]
    });
  });

  it('should be created', inject([BookValidationService], (service: BookValidationService) => {
    expect(service).toBeTruthy();
  }));
});
