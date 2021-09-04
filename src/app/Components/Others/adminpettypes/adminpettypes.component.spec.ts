import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpettypesComponent } from './adminpettypes.component';

describe('AdminpettypesComponent', () => {
  let component: AdminpettypesComponent;
  let fixture: ComponentFixture<AdminpettypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminpettypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminpettypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
