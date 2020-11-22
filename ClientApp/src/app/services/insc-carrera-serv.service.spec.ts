import { TestBed } from '@angular/core/testing';

import { InscCarreraServService } from './insc-carrera-serv.service';

describe('InscCarreraServService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InscCarreraServService = TestBed.get(InscCarreraServService);
    expect(service).toBeTruthy();
  });
});
