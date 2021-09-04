import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelleritemlistComponent } from './selleritemlist.component';

describe('SelleritemlistComponent', () => {
  let component: SelleritemlistComponent;
  let fixture: ComponentFixture<SelleritemlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelleritemlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelleritemlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
