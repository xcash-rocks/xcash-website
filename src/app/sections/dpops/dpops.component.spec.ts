import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DPOPSComponent } from './dpops.component';

describe('DPOPSComponent', () => {
  let component: DPOPSComponent;
  let fixture: ComponentFixture<DPOPSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DPOPSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DPOPSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
