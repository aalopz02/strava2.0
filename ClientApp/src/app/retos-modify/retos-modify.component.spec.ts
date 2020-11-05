import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetosModifyComponent } from './retos-modify.component';

describe('RetosModifyComponent', () => {
  let component: RetosModifyComponent;
  let fixture: ComponentFixture<RetosModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetosModifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetosModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
