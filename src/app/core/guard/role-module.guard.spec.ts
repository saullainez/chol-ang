import { TestBed } from '@angular/core/testing';

import { RoleModuleGuard } from './role-module.guard';

describe('RoleModuleGuard', () => {
  let guard: RoleModuleGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RoleModuleGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
