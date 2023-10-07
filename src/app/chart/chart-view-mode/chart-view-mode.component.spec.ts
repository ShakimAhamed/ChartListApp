import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartViewModeComponent } from './chart-view-mode.component';

describe('ChartViewModeComponent', () => {
  let component: ChartViewModeComponent;
  let fixture: ComponentFixture<ChartViewModeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartViewModeComponent]
    });
    fixture = TestBed.createComponent(ChartViewModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
