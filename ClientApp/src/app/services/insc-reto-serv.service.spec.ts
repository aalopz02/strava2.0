import { TestBed } from '@angular/core/testing';

import { InscRetoServService } from './insc-reto-serv.service';

describe('InscRetoServService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InscRetoServService = TestBed.get(InscRetoServService);
    expect(service).toBeTruthy();
  });
});
