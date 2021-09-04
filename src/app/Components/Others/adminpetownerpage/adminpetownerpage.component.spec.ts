import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpetownerpageComponent } from './adminpetownerpage.component';

describe('AdminpetownerpageComponent', () => {
  let component: AdminpetownerpageComponent;
  let fixture: ComponentFixture<AdminpetownerpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminpetownerpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminpetownerpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
