import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCarrerasSub } from './user.grupos.subs.component';

describe('UserCarrerasSub', () => {
  let component: UserCarrerasSub;
  let fixture: ComponentFixture<UserCarrerasSub>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCarrerasSub ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCarrerasSub);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
