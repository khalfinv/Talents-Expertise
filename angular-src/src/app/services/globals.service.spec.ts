/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GlobalsService } from './globals.service';

describe('GlobalsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlobalsService]
    });
  });

  it('should ...', inject([GlobalsService], (service: GlobalsService) => {
    expect(service).toBeTruthy();
  }));
});
