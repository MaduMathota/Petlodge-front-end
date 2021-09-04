import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmedicinepageComponent } from './addmedicinepage.component';

describe('AddmedicinepageComponent', () => {
  let component: AddmedicinepageComponent;
  let fixture: ComponentFixture<AddmedicinepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmedicinepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmedicinepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
