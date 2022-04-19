import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingArtComponent } from './landing-art.component';

describe('LandingArtComponent', () => {
  let component: LandingArtComponent;
  let fixture: ComponentFixture<LandingArtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingArtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
