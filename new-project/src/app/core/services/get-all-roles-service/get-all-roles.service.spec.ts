import { TestBed } from '@angular/core/testing';

import { GetAllRolesService } from './get-all-roles.service';

describe('GetAllRolesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetAllRolesService = TestBed.get(GetAllRolesService);
    expect(service).toBeTruthy();
  });
});
