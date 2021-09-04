import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetlodgehomepageComponent } from './petlodgehomepage.component';

describe('PetlodgehomepageComponent', () => {
  let component: PetlodgehomepageComponent;
  let fixture: ComponentFixture<PetlodgehomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetlodgehomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetlodgehomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
