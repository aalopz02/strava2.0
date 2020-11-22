import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GruposMainComponent } from './grupos-main.component';

describe('GruposMainComponent', () => {
  let component: GruposMainComponent;
  let fixture: ComponentFixture<GruposMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GruposMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GruposMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
