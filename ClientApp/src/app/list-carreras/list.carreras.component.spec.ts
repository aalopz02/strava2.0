import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrerasAdminList } from './list.carreras.component';

describe('CarrerasAdminList', () => {
  let component: CarrerasAdminList;
  let fixture: ComponentFixture<CarrerasAdminList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrerasAdminList ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrerasAdminList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
