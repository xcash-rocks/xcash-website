import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XdexComponent } from './xdex.component';

describe('XdexComponent', () => {
  let component: XdexComponent;
  let fixture: ComponentFixture<XdexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XdexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XdexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
