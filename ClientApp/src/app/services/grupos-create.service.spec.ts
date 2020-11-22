import { TestBed } from '@angular/core/testing';

import { GruposCreateService } from './grupos-create.service';

describe('GruposCreateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GruposCreateService = TestBed.get(GruposCreateService);
    expect(service).toBeTruthy();
  });
});
