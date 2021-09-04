import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinarianwebpageComponent } from './veterinarianwebpage.component';

describe('VeterinarianwebpageComponent', () => {
  let component: VeterinarianwebpageComponent;
  let fixture: ComponentFixture<VeterinarianwebpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeterinarianwebpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeterinarianwebpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
