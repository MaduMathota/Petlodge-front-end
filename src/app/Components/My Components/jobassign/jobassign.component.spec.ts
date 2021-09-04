import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobassignComponent } from './jobassign.component';

describe('JobassignComponent', () => {
  let component: JobassignComponent;
  let fixture: ComponentFixture<JobassignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobassignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobassignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
