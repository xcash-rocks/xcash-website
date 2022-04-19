import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XpyComponent } from './xpy.component';

describe('XpyComponent', () => {
  let component: XpyComponent;
  let fixture: ComponentFixture<XpyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XpyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XpyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
