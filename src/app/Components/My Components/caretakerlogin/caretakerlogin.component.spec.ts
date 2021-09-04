import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaretakerloginComponent } from './caretakerlogin.component';

describe('CaretakerloginComponent', () => {
  let component: CaretakerloginComponent;
  let fixture: ComponentFixture<CaretakerloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaretakerloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaretakerloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
