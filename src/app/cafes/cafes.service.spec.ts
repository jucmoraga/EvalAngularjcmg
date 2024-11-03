/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { CafesService } from './cafes.service';
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe('Service: Cafes', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CafesService]
    });
  });

  it('should ...', inject([CafesService], (service: CafesService) => {
    expect(service).toBeTruthy();
  }));
});
