import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutAssignmentComponent } from './about-assignment.component';

describe('AboutAssignmentComponent', () => {
  let component: AboutAssignmentComponent;
  let fixture: ComponentFixture<AboutAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
