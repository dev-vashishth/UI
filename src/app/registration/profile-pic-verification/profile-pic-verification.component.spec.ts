import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePicVerificationComponent } from './profile-pic-verification.component';

describe('ProfilePicVerificationComponent', () => {
  let component: ProfilePicVerificationComponent;
  let fixture: ComponentFixture<ProfilePicVerificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilePicVerificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePicVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
