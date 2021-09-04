import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminstoragekennelComponent } from './adminstoragekennel.component';

describe('AdminstoragekennelComponent', () => {
  let component: AdminstoragekennelComponent;
  let fixture: ComponentFixture<AdminstoragekennelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminstoragekennelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminstoragekennelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
