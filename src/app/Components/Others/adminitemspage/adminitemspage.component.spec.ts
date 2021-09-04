import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminitemspageComponent } from './adminitemspage.component';

describe('AdminitemspageComponent', () => {
  let component: AdminitemspageComponent;
  let fixture: ComponentFixture<AdminitemspageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminitemspageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminitemspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
