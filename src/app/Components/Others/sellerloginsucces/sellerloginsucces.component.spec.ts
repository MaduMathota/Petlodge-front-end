import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerloginsuccesComponent } from './sellerloginsucces.component';

describe('SellerloginsuccesComponent', () => {
  let component: SellerloginsuccesComponent;
  let fixture: ComponentFixture<SellerloginsuccesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerloginsuccesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerloginsuccesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
