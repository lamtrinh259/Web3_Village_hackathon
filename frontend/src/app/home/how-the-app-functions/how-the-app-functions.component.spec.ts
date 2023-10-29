import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowTheAppFunctionsComponent } from './how-the-app-functions.component';

describe('HowTheAppFunctionsComponent', () => {
  let component: HowTheAppFunctionsComponent;
  let fixture: ComponentFixture<HowTheAppFunctionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowTheAppFunctionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowTheAppFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
