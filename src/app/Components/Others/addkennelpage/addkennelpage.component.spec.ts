import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddkennelpageComponent } from './addkennelpage.component';

describe('AddkennelpageComponent', () => {
  let component: AddkennelpageComponent;
  let fixture: ComponentFixture<AddkennelpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddkennelpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddkennelpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
