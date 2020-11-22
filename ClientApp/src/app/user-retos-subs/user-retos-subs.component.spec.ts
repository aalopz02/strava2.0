import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRetosSubsComponent } from './user-retos-subs.component';

describe('UserRetosSubsComponent', () => {
  let component: UserRetosSubsComponent;
  let fixture: ComponentFixture<UserRetosSubsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRetosSubsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRetosSubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
