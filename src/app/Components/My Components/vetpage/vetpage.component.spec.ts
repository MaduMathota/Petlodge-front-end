import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VetpageComponent } from './vetpage.component';

describe('VetpageComponent', () => {
  let component: VetpageComponent;
  let fixture: ComponentFixture<VetpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VetpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VetpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
