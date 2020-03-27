import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MidleComponent } from './midle.component';

describe('MidleComponent', () => {
  let component: MidleComponent;
  let fixture: ComponentFixture<MidleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MidleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MidleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
