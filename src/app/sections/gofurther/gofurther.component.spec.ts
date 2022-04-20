import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GofurtherComponent } from './gofurther.component';

describe('GofurtherComponent', () => {
  let component: GofurtherComponent;
  let fixture: ComponentFixture<GofurtherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GofurtherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GofurtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
