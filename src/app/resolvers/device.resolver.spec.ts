import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { deviceResolver } from './device.resolver';

describe('deviceResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => deviceResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
