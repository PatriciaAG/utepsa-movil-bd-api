import { TestBed } from '@angular/core/testing';

import { ServicesProducto } from './services-producto';

describe('ServicesProducto', () => {
  let service: ServicesProducto;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesProducto);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
