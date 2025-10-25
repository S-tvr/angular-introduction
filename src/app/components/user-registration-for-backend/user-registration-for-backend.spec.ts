import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegistrationForBackend } from './user-registration-for-backend';

describe('UserRegistrationForBackend', () => {
  let component: UserRegistrationForBackend;
  let fixture: ComponentFixture<UserRegistrationForBackend>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserRegistrationForBackend]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserRegistrationForBackend);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
