import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbreedComponent } from './addbreed.component';

describe('AddbreedComponent', () => {
  let component: AddbreedComponent;
  let fixture: ComponentFixture<AddbreedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddbreedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbreedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
