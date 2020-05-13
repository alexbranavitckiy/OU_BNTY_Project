import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OprosVoprosComponent } from './opros-vopros.component';

describe('OprosVoprosComponent', () => {
  let component: OprosVoprosComponent;
  let fixture: ComponentFixture<OprosVoprosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OprosVoprosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OprosVoprosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
