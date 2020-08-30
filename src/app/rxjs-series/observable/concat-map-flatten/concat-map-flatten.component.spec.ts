import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcatMapFlattenComponent } from './concat-map-flatten.component';

describe('ConcatMapFlattenComponent', () => {
  let component: ConcatMapFlattenComponent;
  let fixture: ComponentFixture<ConcatMapFlattenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcatMapFlattenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcatMapFlattenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
