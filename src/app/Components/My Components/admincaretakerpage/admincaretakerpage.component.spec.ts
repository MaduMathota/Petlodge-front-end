import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincaretakerpageComponent } from './admincaretakerpage.component';

describe('AdmincaretakerpageComponent', () => {
  let component: AdmincaretakerpageComponent;
  let fixture: ComponentFixture<AdmincaretakerpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmincaretakerpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincaretakerpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
