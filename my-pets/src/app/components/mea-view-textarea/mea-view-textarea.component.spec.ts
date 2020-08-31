import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeaViewTextareaComponent } from './mea-view-textarea.component';

describe('MeaViewTextareaComponent', () => {
  let component: MeaViewTextareaComponent;
  let fixture: ComponentFixture<MeaViewTextareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeaViewTextareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeaViewTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
