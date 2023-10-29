import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongratsOnTakingfirststepComponent } from './congrats-on-takingfirststep.component';

describe('CongratsOnTakingfirststepComponent', () => {
  let component: CongratsOnTakingfirststepComponent;
  let fixture: ComponentFixture<CongratsOnTakingfirststepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CongratsOnTakingfirststepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CongratsOnTakingfirststepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
