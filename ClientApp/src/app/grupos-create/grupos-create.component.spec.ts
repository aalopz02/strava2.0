import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GruposCreateComponent } from './grupos-create.component';

describe('GruposCreateComponent', () => {
  let component: GruposCreateComponent;
  let fixture: ComponentFixture<GruposCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GruposCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GruposCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
