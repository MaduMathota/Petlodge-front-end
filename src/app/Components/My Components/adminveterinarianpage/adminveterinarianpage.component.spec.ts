import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminveterinarianpageComponent } from './adminveterinarianpage.component';

describe('AdminveterinarianpageComponent', () => {
  let component: AdminveterinarianpageComponent;
  let fixture: ComponentFixture<AdminveterinarianpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminveterinarianpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminveterinarianpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
