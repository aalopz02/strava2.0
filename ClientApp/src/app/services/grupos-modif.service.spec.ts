import { TestBed } from '@angular/core/testing';

import { GruposModifService } from './grupos-modif.service';

describe('GruposModifService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GruposModifService = TestBed.get(GruposModifService);
    expect(service).toBeTruthy();
  });
});
