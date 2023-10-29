import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongratsOnCheckinComponent } from './congrats-on-checkin.component';

describe('CongratsOnCheckinComponent', () => {
  let component: CongratsOnCheckinComponent;
  let fixture: ComponentFixture<CongratsOnCheckinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CongratsOnCheckinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CongratsOnCheckinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
