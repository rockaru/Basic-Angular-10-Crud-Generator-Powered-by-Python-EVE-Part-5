import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeaInputTextareaComponent } from './mea-input-textarea.component';

describe('MeaInputTextareaComponent', () => {
  let component: MeaInputTextareaComponent;
  let fixture: ComponentFixture<MeaInputTextareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeaInputTextareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeaInputTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
