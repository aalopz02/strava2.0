import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetosListComponent } from './retos-list.component';

describe('RetosListComponent', () => {
  let component: RetosListComponent;
  let fixture: ComponentFixture<RetosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetosListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
