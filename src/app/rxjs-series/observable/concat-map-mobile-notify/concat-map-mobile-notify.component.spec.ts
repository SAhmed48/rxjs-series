import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcatMapMobileNotifyComponent } from './concat-map-mobile-notify.component';

describe('ConcatMapMobileNotifyComponent', () => {
  let component: ConcatMapMobileNotifyComponent;
  let fixture: ComponentFixture<ConcatMapMobileNotifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcatMapMobileNotifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcatMapMobileNotifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
