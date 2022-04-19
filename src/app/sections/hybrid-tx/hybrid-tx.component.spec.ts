import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HybridTxComponent } from './hybrid-tx.component';

describe('HybridTxComponent', () => {
  let component: HybridTxComponent;
  let fixture: ComponentFixture<HybridTxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HybridTxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HybridTxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
