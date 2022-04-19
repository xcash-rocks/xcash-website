import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XpaymentComponent } from './xpayment.component';

describe('XpaymentComponent', () => {
  let component: XpaymentComponent;
  let fixture: ComponentFixture<XpaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XpaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
