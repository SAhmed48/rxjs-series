import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectBehavoirComponent } from './subject-behavoir.component';

describe('SubjectBehavoirComponent', () => {
  let component: SubjectBehavoirComponent;
  let fixture: ComponentFixture<SubjectBehavoirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectBehavoirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectBehavoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
