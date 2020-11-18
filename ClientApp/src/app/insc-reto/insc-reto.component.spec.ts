import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscRetoComponent } from './insc-reto.component';

describe('InscRetoComponent', () => {
  let component: InscRetoComponent;
  let fixture: ComponentFixture<InscRetoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscRetoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscRetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
