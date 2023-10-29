import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavDappComponent } from './nav-dapp.component';

describe('NavDappComponent', () => {
  let component: NavDappComponent;
  let fixture: ComponentFixture<NavDappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavDappComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavDappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
