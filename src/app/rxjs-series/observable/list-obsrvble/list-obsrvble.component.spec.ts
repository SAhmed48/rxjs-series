import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListObsrvbleComponent } from './list-obsrvble.component';

describe('ListObsrvbleComponent', () => {
  let component: ListObsrvbleComponent;
  let fixture: ComponentFixture<ListObsrvbleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListObsrvbleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListObsrvbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
