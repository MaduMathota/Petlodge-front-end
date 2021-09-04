import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaretakersignupComponent } from './caretakersignup.component';

describe('CaretakersignupComponent', () => {
  let component: CaretakersignupComponent;
  let fixture: ComponentFixture<CaretakersignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaretakersignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaretakersignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
