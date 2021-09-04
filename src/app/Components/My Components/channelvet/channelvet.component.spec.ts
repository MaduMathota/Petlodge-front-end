import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelvetComponent } from './channelvet.component';

describe('ChannelvetComponent', () => {
  let component: ChannelvetComponent;
  let fixture: ComponentFixture<ChannelvetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelvetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelvetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
