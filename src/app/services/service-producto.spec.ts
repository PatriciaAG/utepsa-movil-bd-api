import { TestBed } from '@angular/core/testing';

import { ServiceProducto } from './service-producto';

describe('ServiceProducto', () => {
  let service: ServiceProducto;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceProducto);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
