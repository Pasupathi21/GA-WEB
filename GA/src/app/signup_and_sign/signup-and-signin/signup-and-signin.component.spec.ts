import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupAndSigninComponent } from './signup-and-signin.component';

describe('SignupAndSigninComponent', () => {
  let component: SignupAndSigninComponent;
  let fixture: ComponentFixture<SignupAndSigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupAndSigninComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupAndSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
