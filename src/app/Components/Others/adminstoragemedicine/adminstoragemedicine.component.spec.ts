import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminstoragemedicineComponent } from './adminstoragemedicine.component';

describe('AdminstoragemedicineComponent', () => {
  let component: AdminstoragemedicineComponent;
  let fixture: ComponentFixture<AdminstoragemedicineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminstoragemedicineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminstoragemedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
