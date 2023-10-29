import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeConfirmationComponent } from './challenge-confirmation.component';

describe('ChallengeConfirmationComponent', () => {
  let component: ChallengeConfirmationComponent;
  let fixture: ComponentFixture<ChallengeConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChallengeConfirmationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengeConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
