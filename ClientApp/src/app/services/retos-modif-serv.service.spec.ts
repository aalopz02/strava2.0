import { TestBed } from '@angular/core/testing';

import { RetosModifServService } from './retos-modif-serv.service';

describe('RetosModifServService', () => {
  let service: RetosModifServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RetosModifServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
