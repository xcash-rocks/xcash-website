import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcoxComponent } from './ecox.component';

describe('EcoxComponent', () => {
  let component: EcoxComponent;
  let fixture: ComponentFixture<EcoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
