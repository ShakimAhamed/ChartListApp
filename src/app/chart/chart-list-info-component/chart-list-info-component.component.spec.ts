import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartListInfoComponentComponent } from './chart-list-info-component.component';

describe('ChartListInfoComponentComponent', () => {
  let component: ChartListInfoComponentComponent;
  let fixture: ComponentFixture<ChartListInfoComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartListInfoComponentComponent]
    });
    fixture = TestBed.createComponent(ChartListInfoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
