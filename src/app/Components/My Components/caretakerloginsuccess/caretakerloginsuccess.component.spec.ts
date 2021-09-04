import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaretakerloginsuccessComponent } from './caretakerloginsuccess.component';

describe('CaretakerloginsuccessComponent', () => {
  let component: CaretakerloginsuccessComponent;
  let fixture: ComponentFixture<CaretakerloginsuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaretakerloginsuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaretakerloginsuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
