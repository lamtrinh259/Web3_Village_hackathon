import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewChallengeComponent } from './create-new-challenge.component';

describe('CreateNewChallengeComponent', () => {
  let component: CreateNewChallengeComponent;
  let fixture: ComponentFixture<CreateNewChallengeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNewChallengeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
