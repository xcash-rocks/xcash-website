import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XbankComponent } from './xbank.component';

describe('XbankComponent', () => {
  let component: XbankComponent;
  let fixture: ComponentFixture<XbankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XbankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XbankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
