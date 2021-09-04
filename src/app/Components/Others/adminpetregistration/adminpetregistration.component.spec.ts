import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpetregistrationComponent } from './adminpetregistration.component';

describe('AdminpetregistrationComponent', () => {
  let component: AdminpetregistrationComponent;
  let fixture: ComponentFixture<AdminpetregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminpetregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminpetregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
