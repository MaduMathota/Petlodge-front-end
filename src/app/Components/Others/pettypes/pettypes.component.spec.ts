import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PettypesComponent } from './pettypes.component';

describe('PettypesComponent', () => {
  let component: PettypesComponent;
  let fixture: ComponentFixture<PettypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PettypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PettypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
