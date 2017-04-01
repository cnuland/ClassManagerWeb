import { TestBed, inject } from '@angular/core/testing';

import { MyProfileService } from './my-profile.service';

describe('MyProfileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyProfileService]
    });
  });

  it('should ...', inject([MyProfileService], (service: MyProfileService) => {
    expect(service).toBeTruthy();
  }));
});
