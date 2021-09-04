import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelleritemwallComponent } from './selleritemwall.component';

describe('SelleritemwallComponent', () => {
  let component: SelleritemwallComponent;
  let fixture: ComponentFixture<SelleritemwallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelleritemwallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelleritemwallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
