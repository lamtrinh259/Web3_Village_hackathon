import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DappMainPageComponent } from './dapp-main-page.component';

describe('DappMainPageComponent', () => {
  let component: DappMainPageComponent;
  let fixture: ComponentFixture<DappMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DappMainPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DappMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
