import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsOfficeComponent } from './students-office.component';

describe('StudentsOfficeComponent', () => {
  let component: StudentsOfficeComponent;
  let fixture: ComponentFixture<StudentsOfficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsOfficeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
