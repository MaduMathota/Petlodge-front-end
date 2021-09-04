import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetbreedsComponent } from './petbreeds.component';

describe('PetbreedsComponent', () => {
  let component: PetbreedsComponent;
  let fixture: ComponentFixture<PetbreedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetbreedsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetbreedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
