import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GruposModifyComponent } from './grupos-modify.component';

describe('GruposModifyComponent', () => {
  let component: GruposModifyComponent;
  let fixture: ComponentFixture<GruposModifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GruposModifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GruposModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
