import { TestBed } from '@angular/core/testing';

import { MockUsersService } from './mock-users.service';

describe('MockUsersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MockUsersService = TestBed.get(MockUsersService);
    expect(service).toBeTruthy();
  });
});
