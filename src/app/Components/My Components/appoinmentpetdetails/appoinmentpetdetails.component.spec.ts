import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppoinmentpetdetailsComponent } from './appoinmentpetdetails.component';

describe('AppoinmentpetdetailsComponent', () => {
  let component: AppoinmentpetdetailsComponent;
  let fixture: ComponentFixture<AppoinmentpetdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppoinmentpetdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppoinmentpetdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
