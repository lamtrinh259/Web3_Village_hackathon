import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalWalletComponent } from './modal-wallet.component';

describe('ModalWalletComponent', () => {
  let component: ModalWalletComponent;
  let fixture: ComponentFixture<ModalWalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalWalletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
