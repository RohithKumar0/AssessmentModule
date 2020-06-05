import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatePerformanceComponent } from './candidate-performance.component';

describe('CandidatePerformanceComponent', () => {
  let component: CandidatePerformanceComponent;
  let fixture: ComponentFixture<CandidatePerformanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidatePerformanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatePerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
