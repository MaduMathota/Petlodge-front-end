import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfoodpageComponent } from './addfoodpage.component';

describe('AddfoodpageComponent', () => {
  let component: AddfoodpageComponent;
  let fixture: ComponentFixture<AddfoodpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddfoodpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddfoodpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
