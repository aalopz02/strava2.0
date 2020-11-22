import { TestBed } from '@angular/core/testing';

import { GruposDelService } from './grupos-del.service';

describe('GruposDelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GruposDelService = TestBed.get(GruposDelService);
    expect(service).toBeTruthy();
  });
});
