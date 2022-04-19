import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidechainsComponent } from './sidechains.component';

describe('SidechainsComponent', () => {
  let component: SidechainsComponent;
  let fixture: ComponentFixture<SidechainsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidechainsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidechainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
