import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpetbreedsComponent } from './adminpetbreeds.component';

describe('AdminpetbreedsComponent', () => {
  let component: AdminpetbreedsComponent;
  let fixture: ComponentFixture<AdminpetbreedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminpetbreedsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminpetbreedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
