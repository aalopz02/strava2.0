import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GruposUser } from './user.grupos.subs.component';

describe('GruposUser', () => {
  let component: GruposUser;
  let fixture: ComponentFixture<GruposUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GruposUser ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GruposUser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
