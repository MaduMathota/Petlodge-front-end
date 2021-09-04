import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpetpageComponent } from './adminpetpage.component';

describe('AdminpetpageComponent', () => {
  let component: AdminpetpageComponent;
  let fixture: ComponentFixture<AdminpetpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminpetpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminpetpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
