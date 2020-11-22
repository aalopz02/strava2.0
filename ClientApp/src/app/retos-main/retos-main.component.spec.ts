import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetosMainComponent } from './retos-main.component';

describe('RetosMainComponent', () => {
  let component: RetosMainComponent;
  let fixture: ComponentFixture<RetosMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetosMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetosMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
