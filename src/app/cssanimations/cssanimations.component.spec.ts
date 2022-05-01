import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssanimationsComponent } from './cssanimations.component';

describe('CssanimationsComponent', () => {
  let component: CssanimationsComponent;
  let fixture: ComponentFixture<CssanimationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssanimationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CssanimationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
