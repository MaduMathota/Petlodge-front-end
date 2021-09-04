import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminjobpageComponent } from './adminjobpage.component';

describe('AdminjobpageComponent', () => {
  let component: AdminjobpageComponent;
  let fixture: ComponentFixture<AdminjobpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminjobpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminjobpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
