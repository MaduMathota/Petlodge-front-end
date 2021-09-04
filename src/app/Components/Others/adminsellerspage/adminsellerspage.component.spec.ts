import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsellerspageComponent } from './adminsellerspage.component';

describe('AdminsellerspageComponent', () => {
  let component: AdminsellerspageComponent;
  let fixture: ComponentFixture<AdminsellerspageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminsellerspageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminsellerspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
