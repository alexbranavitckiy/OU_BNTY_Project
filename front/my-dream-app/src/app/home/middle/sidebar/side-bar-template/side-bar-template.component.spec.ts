import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarTemplateComponent } from './side-bar-template.component';

describe('SideBarTemplateComponent', () => {
  let component: SideBarTemplateComponent;
  let fixture: ComponentFixture<SideBarTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideBarTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
