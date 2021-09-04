import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VetsignupComponent } from './vetsignup.component';

describe('VetsignupComponent', () => {
  let component: VetsignupComponent;
  let fixture: ComponentFixture<VetsignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VetsignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VetsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
