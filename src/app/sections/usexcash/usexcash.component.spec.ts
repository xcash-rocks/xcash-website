import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsexcashComponent } from './usexcash.component';

describe('UsexcashComponent', () => {
  let component: UsexcashComponent;
  let fixture: ComponentFixture<UsexcashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsexcashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsexcashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
