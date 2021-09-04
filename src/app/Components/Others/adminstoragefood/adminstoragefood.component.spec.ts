import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminstoragefoodComponent } from './adminstoragefood.component';

describe('AdminstoragefoodComponent', () => {
  let component: AdminstoragefoodComponent;
  let fixture: ComponentFixture<AdminstoragefoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminstoragefoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminstoragefoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
