import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChanneldetailpageComponent } from './channeldetailpage.component';

describe('ChanneldetailpageComponent', () => {
  let component: ChanneldetailpageComponent;
  let fixture: ComponentFixture<ChanneldetailpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChanneldetailpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChanneldetailpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
