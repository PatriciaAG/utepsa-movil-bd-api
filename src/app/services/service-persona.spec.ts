import { TestBed } from '@angular/core/testing';

import { ServicePersona } from './service-persona';

describe('ServicePersona', () => {
  let service: ServicePersona;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicePersona);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
