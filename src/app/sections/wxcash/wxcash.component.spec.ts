import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WxcashComponent } from './wxcash.component';

describe('WxcashComponent', () => {
  let component: WxcashComponent;
  let fixture: ComponentFixture<WxcashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WxcashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WxcashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
