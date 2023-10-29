import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentPledgesComponent } from './current-pledges.component';

describe('CurrentPledgesComponent', () => {
  let component: CurrentPledgesComponent;
  let fixture: ComponentFixture<CurrentPledgesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentPledgesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentPledgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
