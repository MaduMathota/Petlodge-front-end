import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminselleritemspageComponent } from './adminselleritemspage.component';

describe('AdminselleritemspageComponent', () => {
  let component: AdminselleritemspageComponent;
  let fixture: ComponentFixture<AdminselleritemspageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminselleritemspageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminselleritemspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
