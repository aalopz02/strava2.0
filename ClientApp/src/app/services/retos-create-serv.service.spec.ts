import { TestBed } from '@angular/core/testing';

import { RetosCreateServService } from './retos-create-serv.service';

describe('RetosCreateServService', () => {
  let service: RetosCreateServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RetosCreateServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
