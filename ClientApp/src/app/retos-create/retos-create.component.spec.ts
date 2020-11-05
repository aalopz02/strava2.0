import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetosCreateComponent } from './retos-create.component';

describe('RetosCreateComponent', () => {
  let component: RetosCreateComponent;
  let fixture: ComponentFixture<RetosCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetosCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetosCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
