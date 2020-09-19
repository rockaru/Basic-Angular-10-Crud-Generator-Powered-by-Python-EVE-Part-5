import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeaTemplateComponent } from './template.component';

describe('TemplateComponent', () => {
  let component: MeaTemplateComponent;
  let fixture: ComponentFixture<MeaTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeaTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeaTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
