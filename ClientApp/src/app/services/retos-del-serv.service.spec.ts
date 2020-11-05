import { TestBed } from '@angular/core/testing';

import { RetosDelServService } from './retos-del-serv.service';

describe('RetosDelServService', () => {
  let service: RetosDelServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RetosDelServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
