/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UploadServicesService } from './UploadServices.service';

describe('Service: UploadServices', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UploadServicesService]
    });
  });

  it('should ...', inject([UploadServicesService], (service: UploadServicesService) => {
    expect(service).toBeTruthy();
  }));
});
