import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerregistraionComponent } from './sellerregistraion.component';

describe('SellerregistraionComponent', () => {
  let component: SellerregistraionComponent;
  let fixture: ComponentFixture<SellerregistraionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerregistraionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerregistraionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
