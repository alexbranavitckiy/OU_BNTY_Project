import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideTemplateComponent } from './side-template.component';

describe('SideTemplateComponent', () => {
  let component: SideTemplateComponent;
  let fixture: ComponentFixture<SideTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
